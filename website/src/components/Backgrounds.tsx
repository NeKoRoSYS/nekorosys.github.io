import backgroundImage from '../assets/background.jpeg';

export default function Background() {
  return (
    <div 
      className="fixed inset-0 z-0 bg-cover bg-center bg-purple-950 opacity-35 pointer-events-none" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
  );
}

import { useEffect, useRef } from 'react';
import backgroundVideo from '../assets/background.mp4'; 

interface BackgroundProps {
  sampleSize?: number;
  themeColor?: string;
}

export function BackgroundAscii({ 
  sampleSize = 20, 
  themeColor = '#a855f7'
}: BackgroundProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const gl = canvas.getContext('webgl', { antialias: false, powerPreference: "high-performance" });
    if (!gl) {
      console.error("WebGL not supported, falling back.");
      return;
    }

    const parseHex = (hex: string) => {
      const clean = hex.replace('#', '');
      const r = parseInt(clean.substring(0, 2), 16) / 255;
      const g = parseInt(clean.substring(2, 4), 16) / 255;
      const b = parseInt(clean.substring(4, 6), 16) / 255;
      return [r, g, b];
    };
    const [themeR, themeG, themeB] = parseHex(themeColor);

    const vsSource = `
      attribute vec2 position;
      varying vec2 vTexCoord;
      void main() {
        vTexCoord = position * 0.5 + 0.5;
        vTexCoord.y = 1.0 - vTexCoord.y; // Flip Y axis to match texture orientation
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision highp float;
      varying vec2 vTexCoord;
      uniform sampler2D uVideoTexture;
      uniform vec2 uResolution;
      uniform float uSampleSize;
      uniform vec3 uThemeColor;

      // Mathematical pseudo-font generator running on GPU coordinates.
      // Generates pixelated alphanumeric structures without storing large text atlases.
      float getAsciiChar(float brightness, vec2 characterGridCoord) {
        float b = clamp(brightness, 0.0, 1.0);
        vec2 uv = characterGridCoord;
        
        // procedural logic that blocks or permits pixel mapping depending on pixel value thresholds
        if (b < 0.1) return 0.0; // Dark space
        if (b < 0.25) return step(0.4, uv.y) * step(uv.y, 0.6) * step(0.1, uv.x) * step(uv.x, 0.9); // Hyphen '-'
        if (b < 0.45) return step(0.3, uv.y) * step(uv.y, 0.7) * step(0.3, uv.x) * step(uv.x, 0.7); // Plus '+'
        if (b < 0.7)  return step(0.15, length(uv - 0.5)) * step(length(uv - 0.5), 0.45); // Zero/O ring
        return step(0.1, uv.x) * step(uv.x, 0.9) * step(0.1, uv.y) * step(uv.y, 0.9); // Dense Solid block
      }

      void main() {
        // Adjust for typical monospace text aspect ratio bias (0.55 wide vs 1.0 tall)
        vec2 gridFactor = vec2(uSampleSize * 0.55, uSampleSize);
        
        // Pixel step calculations
        vec2 blockCoord = floor(gl_FragCoord.xy / gridFactor) * gridFactor / uResolution;
        vec2 charCoord = fract(gl_FragCoord.xy / gridFactor);

        // Fetch frame color parameters
        vec4 videoPixel = texture2D(uVideoTexture, blockCoord);
        
        // Fast hardware relative luminance conversion
        float brightness = dot(videoPixel.rgb, vec3(0.2126, 0.7152, 0.0722));
        
        // Determine individual pixel visibility state from our procedural character map
        float asciiWeight = getAsciiChar(brightness, charCoord);
        
        // Output matrix-themed raster color vectors instantly
        gl_FragColor = vec4(uThemeColor * asciiWeight, 1.0);
      }
    `;

    const loadShader = (type: number, source: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const program = gl.createProgram()!;
    gl.attachShader(program, loadShader(gl.VERTEX_SHADER, vsSource));
    gl.attachShader(program, loadShader(gl.FRAGMENT_SHADER, fsSource));
    gl.linkProgram(program);
    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);

    const posLocation = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(posLocation);
    gl.vertexAttribPointer(posLocation, 2, gl.FLOAT, false, 0, 0);

    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    const resLocation = gl.getUniformLocation(program, "uResolution");
    const sizeLocation = gl.getUniformLocation(program, "uSampleSize");
    const colorLocation = gl.getUniformLocation(program, "uThemeColor");

    let animationId: number;

    const renderLoop = () => {
      if (video.paused || video.ended) {
        animationId = requestAnimationFrame(renderLoop);
        return;
      }

      if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }

      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true); 
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, video);
      gl.uniform2f(resLocation, canvas.width, canvas.height);
      gl.uniform1f(sizeLocation, sampleSize);
      gl.uniform3f(colorLocation, themeR, themeG, themeB);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationId = requestAnimationFrame(renderLoop);
    };

    const startVideo = () => {
      video.play().catch(() => {});
      animationId = requestAnimationFrame(renderLoop);
    };

    if (video.readyState >= 1) {
      startVideo();
    } else {
      video.addEventListener('loadedmetadata', startVideo);
    }

    return () => {
      video.removeEventListener('loadedmetadata', startVideo);
      cancelAnimationFrame(animationId);
      gl.deleteTexture(texture);
      gl.deleteBuffer(positionBuffer);
      gl.deleteProgram(program);
    };
  }, [sampleSize, themeColor]);

  return (
    <div className="fixed inset-0 z-0 opacity-35 pointer-events-none bg-black">
      <video 
        ref={videoRef} 
        src={backgroundVideo} 
        autoPlay 
        loop 
        muted 
        playsInline 
        crossOrigin="anonymous" 
        style={{ position: 'absolute', width: '1px', height: '1px', opacity: 0 }} 
      />
      <canvas 
        ref={canvasRef} 
        className="w-full h-full object-cover" 
      />
    </div>
  );
}