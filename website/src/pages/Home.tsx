import { Link } from 'react-router-dom';
import { PillButton, RectButton } from '../components/Buttons';
import { PopoutBlock, PopoutPanel } from '../components/Popouts';
import { FadeIn, PageWrapper } from '../components/PageTransition';
import Colors from '../shared/Colors';
import Icons from '../shared/Icons';
import downloadIcon from '../assets/download.webp';
import { CopyTextToClipboard } from '../shared/Utils';
import { educationData, professionalData, technicalData, Timeline } from '../components/Timeline';

interface LabelProps {
  children: string;
}

const Label = ({ children }: LabelProps) => (
  <span className={`${Colors.textAccent} font-mono mr-2 select-none`}>
    {`> ${children}:`}
  </span>
);

interface LinkBtnProps {
  children: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void; // <-- Updated this line
  textToCopy?: string;
  className: string;
  iconSrc: string;
  delay: number;
}

const LinkBtn = ({ children, href, onClick, textToCopy, className, iconSrc, delay }: LinkBtnProps) => {
  const handleClick = async (e: React.MouseEvent<HTMLElement>) => {
    if (textToCopy) {
      e.preventDefault();
      CopyTextToClipboard(textToCopy);
    }

    if (onClick) {
      onClick(e);
    }
  };

  const resolvedHref = href || "#";

  return (
    <RectButton 
      href={resolvedHref} 
      onClick={handleClick} 
      delay={delay} 
      invertIcon={true} 
      className={className} 
      iconSrc={iconSrc}
    >
      <b>{children}</b>
    </RectButton>
  );
};

export default function Home() {
  return (
    <PageWrapper>
      <div className="flex flex-col w-full items-center animate-in fade-in duration-700 mt-24 md:mt-42 mb-16 px-4">
        
        <div className="mt-8 md:mt-12 mb-16 md:mb-20 text-center">
          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold drop-shadow-[0_0_8px_rgba(57,255,20,0.5)] text-transparent bg-clip-text bg-linear-to-br from-[#39FF14] to-green-200 tracking-tight">
              Hello, World!
            </h1>
            <p className="mt-4 text-gray-400 text-sm sm:text-lg tracking-widest uppercase font-medium">
              Welcome to my website.
            </p>
          </FadeIn>
        </div>

        <div className="flex w-full max-w-4xl justify-center">
          <PopoutBlock className="flex-1 w-full">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-4 h-4 rounded-full min-w-4 ${Colors.indicatorPulseGreen}`} />
              <h4 className="font-bold text-lg sm:text-xl text-gray-100">{"$ fastfetch"}</h4>
            </div>
            
            <div className="space-y-3 text-sm sm:text-base text-gray-400 overflow-hidden wrap-break-word">
              <p><Label>Name</Label>John Marky G. Malibiran</p>
              <p><Label>Alias</Label>NeKoRoSYS</p>
              <p><Label>Role</Label>Graphic Designer | Full-Stack Web & Game Developer</p>
              <p><Label>Status</Label>For Hire</p>
            </div>
          </PopoutBlock>
        </div>

        <div className='mt-24 w-full max-w-62.5 flex justify-center mb-24'>
            <Link to="/portfolio" className="w-full">
                <PillButton delay={0.3}>{<b>Hire Me</b>}</PillButton>
            </Link>
        </div>

        <div className="mt-24 mb-12 flex w-full max-w-4xl justify-center">
          <PopoutPanel className="flex-1 w-full mb-0! text-left">
            <div className="flex items-center justify-center gap-4 mb-10">
              <h1 className="font-bold text-3xl sm:text-5xl text-gray-100 drop-shadow-[0_0_16px_rgba(255,255,255,0.5)] text-center">About Me</h1>
            </div>
            
            <div className="flex flex-col md:flex-row max-w-4xl gap-10 items-stretch text-gray-300 text-sm sm:text-base leading-relaxed">
               <div className="flex-1 space-y-5">
                  <p>
                    Hello! My name is Marky, and I am better known online as NeKoRoSYS! I am a 19-year-old Filipino based in Manila, and I aspire to be a software developer and systems architect.
                    My goal is to learn a lot of aspects that come in developing software and IoT such as video games, and other tools and systems. 
                  </p><br></br>
                  <p>
                    I also happen to be interested in graphic and motion design, too. This website of mine serves as a landing page where you can explore my creative and technical sides!
                  </p>
               </div>
               
               <div className="flex-1 flex flex-col justify-center bg-black/30 p-6 md:p-8 rounded-xl border border-white/10 w-full shadow-inner">
                  <h3 className="text-xl font-bold text-gray-100 mb-6 flex items-center gap-3">
                    <span className="text-[#39FF14] text-2xl">{`{ }`}</span> core_modules
                  </h3>
                  <ul className="space-y-4 font-mono text-sm md:text-base">
                     <li className="flex flex-col sm:flex-row sm:gap-2">
                        <span className="text-purple-400 font-bold min-w-30">Location:</span> 
                        <span className="text-gray-300">Manila, Philippines</span>
                     </li>
                     <li className="flex flex-col sm:flex-row sm:gap-2">
                        <span className="text-purple-400 font-bold min-w-30">Focus:</span> 
                        <span className="text-gray-300">Game Development</span>
                     </li>
                     <li className="flex flex-col sm:flex-row sm:gap-2">
                        <span className="text-purple-400 font-bold min-w-30">Environment:</span> 
                        <span className="text-gray-300">Arch Linux / Zsh (Hyprland)</span>
                     </li>
                     <li className="flex flex-col sm:flex-row sm:gap-2 mt-4 pt-4 border-t border-white/10">
                        <span className="text-[#39FF14] font-bold min-w-30 animate-pulse">Running:</span> 
                        <span className="text-gray-100 font-bold">On Caffeine</span>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="mt-8 w-full flex max-w-4xl flex-col items-center gap-8">
              <div className="w-full grid grid-cols-5 gap-4 md:gap-6">
                  <LinkBtn delay={0.1} className={Colors.google} iconSrc={Icons.youtubeIcon} href="https://youtube.com/@nekorosys">YouTube</LinkBtn>
                  <LinkBtn delay={0.2} className={Colors.twitter} iconSrc={Icons.twitterIcon} href="https://x.com/nekorosys">X</LinkBtn>
                  <LinkBtn delay={0.3} className={Colors.itchio} iconSrc={Icons.itchioIcon} href="https://nekorosys.itch.io">Itch.io</LinkBtn>
                  <LinkBtn delay={0.4} className={Colors.tiktok} iconSrc={Icons.tiktokIcon} href="https://tiktok.com/@nekorosys">TikTok</LinkBtn>
                  <LinkBtn delay={0.6} className={Colors.discord} iconSrc={Icons.discordIcon} href="https://discord.gg/invite/tZsMTPNYU8">Discord</LinkBtn>
              </div>
          </div>
          </PopoutPanel>
        </div>
        
        <div className="mt-24 flex flex-col items-center w-full max-w-4xl gap-12">
            
          <div className="w-full flex flex-col items-center gap-8">
            <FadeIn delay={0.2}>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-100 tracking-tight drop-shadow-[0_0_16px_rgba(255,255,255,0.5)] text-center">
                *Sponsor Me
              </h1>
            </FadeIn>
            <div className="w-full grid grid-cols-5 gap-4 md:gap-6 mb-16">
                <LinkBtn delay={0.1} className={Colors.paypal} iconSrc={Icons.paypalIcon} href='https://www.paypal.com/paypalme/genecromarky'>PayPal</LinkBtn>
                <LinkBtn delay={0.2} className={Colors.kofi} iconSrc={Icons.kofiIcon} href='https://ko-fi.com/nekorosys'>Ko-fi</LinkBtn>
                <LinkBtn delay={0.3} className={Colors.payhip} iconSrc={Icons.payhipIcon} href='https://payhip.com/nekorosys'>Payhip</LinkBtn>
                <LinkBtn delay={0.4} className={Colors.etherium} iconSrc={Icons.ethereumIcon} textToCopy='0x5C429b3fdc7E6F7a692C234358ba31492Feb651C'>Ethereum</LinkBtn>
                <LinkBtn delay={0.5} className={Colors.bitcoin} iconSrc={Icons.bitcoinIcon} textToCopy='bc1qw80kkgu8yp4mwzuzddygmnyamcjesfavwmer8a'>Bitcoin</LinkBtn>
            </div>
            <p><i>*Sponsoring me is not a must, but will be immensely appreciated! (❁´◡`❁)</i></p>
          </div>

        </div>

        <div className="mt-24 flex w-full max-w-4xl justify-center">
          <PopoutPanel className="flex-1 w-full mb-0! text-left">
            <div className="flex items-center justify-center gap-4 mb-10">
              <h1 className="font-bold text-3xl sm:text-5xl text-gray-100 drop-shadow-[0_0_16px_rgba(255,255,255,0.5)] text-center">Curriculum Vitae</h1>
              <a>
                <img aria-hidden={true} className='invert' src={downloadIcon} width={25} height={25}></img>
              </a>
            </div>

            <h2 className="text-xl font-bold text-gray-300 mt-4 text-center">Education</h2>
            <Timeline data={educationData} />
            
            <h2 className="text-xl font-bold text-gray-300 mt-20 text-center">Work and Leadership</h2>
            <Timeline data={professionalData} />

            <h2 className="text-xl font-bold text-gray-300 mt-20 text-center">Technical Endeavors</h2>
            <Timeline data={technicalData} />
            
          </PopoutPanel>
        </div>
        
      </div>
    </PageWrapper>
  );
}