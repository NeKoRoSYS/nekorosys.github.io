import { Link } from 'react-router-dom';
import { PillButton, RectButton } from '../components/Buttons';
import { PopoutBlock, PopoutPanel } from '../components/Popouts';
import { FadeIn, PageWrapper } from '../components/PageTransition';
import Colors from '../shared/Colors';
import Icons from '../shared/Icons';

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
  className: string;
  iconSrc: string;
  delay: number;
}

const LinkBtn = ({ children, href = "#", className, iconSrc, delay }: LinkBtnProps) => (
  <a href={href}>
    <RectButton delay={delay} invertIcon={true} className={className} iconSrc={iconSrc}>
      <b>{children}</b>
    </RectButton>
  </a>
);

export default function Home() {
  return (
    <PageWrapper>
      <div className="flex flex-col w-full items-center animate-in fade-in duration-700 mt-24 md:mt-42 mb-16 px-4">
        
        <div className="mt-8 md:mt-12 mb-16 md:mb-20 text-center">
          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold drop-shadow-[0_0_8px_rgba(0,180,110,0.75)] text-transparent bg-clip-text bg-linear-to-br from-green-600 to-green-300 tracking-tight">
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
              <div className={`w-4 h-4 rounded-full min-w-4 ${Colors.indicatorPulse}`} />
              <h4 className="font-bold text-lg sm:text-xl text-gray-100">{"$ fastfetch"}</h4>
            </div>
            
            <div className="space-y-3 text-sm sm:text-base text-gray-400 overflow-hidden wrap-break-word">
              <p><Label>Name</Label>John Marky G. Malibiran</p>
              <p><Label>Alias</Label>NeKoRoSYS</p>
              <p><Label>Role</Label>Graphic Designer | Full-Stack Web & Game Developer</p>
            </div>
          </PopoutBlock>
        </div>

        <div className='mt-24 w-full max-w-62.5 flex justify-center'>
            <Link to="/portfolio" className="w-full">
                <PillButton delay={0.3}>{<b>Hire Me</b>}</PillButton>
            </Link>
        </div>

        <div className="mt-24 flex w-full max-w-2xl justify-center">
          <PopoutPanel className="flex-1 w-full !mb-0">
            <div className="flex items-center justify-center gap-4 mb-4">
              <h1 className="font-bold text-3xl sm:text-5xl text-gray-100 drop-shadow-[0_0_16px_rgba(255,255,255,0.5)] text-center">About Me</h1>
            </div>
          </PopoutPanel>
        </div>
        
        <div className="mt-24 flex flex-col items-center w-full max-w-4xl gap-12">
            
          <div className="w-full flex flex-col items-center gap-8">
            <FadeIn delay={0.2}>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-100 tracking-tight drop-shadow-[0_0_16px_rgba(255,255,255,0.5)] text-center">
                Connect with Me
              </h1>
            </FadeIn>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
                <LinkBtn delay={0.1} className={Colors.google} iconSrc={Icons.youtubeIcon}>YouTube</LinkBtn>
                <LinkBtn delay={0.2} className={Colors.twitter} iconSrc={Icons.twitterIcon}>X</LinkBtn>
                <LinkBtn delay={0.3} className={Colors.instagram} iconSrc={Icons.instagramIcon}>Instagram</LinkBtn>
                <LinkBtn delay={0.4} className={Colors.tiktok} iconSrc={Icons.tiktokIcon}>TikTok</LinkBtn>
                <LinkBtn delay={0.6} className={Colors.discord} iconSrc={Icons.discordIcon}>Discord</LinkBtn>
            </div>
          </div>

          <div className="w-full flex flex-col items-center gap-8">
            <FadeIn delay={0.2}>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-100 tracking-tight drop-shadow-[0_0_16px_rgba(255,255,255,0.5)] text-center">
                Support Me
              </h1>
            </FadeIn>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-16">
                <LinkBtn delay={0.1} className={Colors.paypal} iconSrc={Icons.paypalIcon}>PayPal</LinkBtn>
                <LinkBtn delay={0.2} className={Colors.kofi} iconSrc={Icons.kofiIcon}>Ko-fi</LinkBtn>
                <LinkBtn delay={0.3} className={Colors.payhip} iconSrc={Icons.payhipIcon}>Payhip</LinkBtn>
                <LinkBtn delay={0.4} className={Colors.etherium} iconSrc={Icons.ethereumIcon}>Ethereum</LinkBtn>
                <LinkBtn delay={0.5} className={Colors.bitcoin} iconSrc={Icons.bitcoinIcon}>Bitcoin</LinkBtn>
            </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
}