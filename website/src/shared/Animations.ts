import type { Variants } from "motion/react";

const Animations = {
    riseOnHover: "translate-y-0 hover:-translate-y-1",
}

const innerBlockVariants: Variants = { 
  hiddenTop: { opacity: 0, scale: 0.92, y: -40 }, 
  hiddenBottom: { opacity: 0, scale: 0.92, y: 40 }, 
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 14, duration: 0.8 } }
};

const innerPanelVariants: Variants = { 
  hiddenTop: { opacity: 0, y: -40 }, 
  hiddenBottom: { opacity: 0, y: 40 }, 
  visible: { opacity: 1, y: 0, transition: { type: "tween", duration: 0.8 } } 
}; 

export {
    Animations, innerBlockVariants, innerPanelVariants
}