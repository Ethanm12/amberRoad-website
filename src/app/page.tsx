import HeaderNav from "@/components/headerNav";
import FooterNav from "@/components/footerNav";
import HeroSection from "@/modules/Home/HeroSection";
import '../styles/global.scss';
import InfoSection from "@/modules/Home/infoSection";
import CardSection from "@/modules/Home/cardSection";
import FeatureSection from "@/modules/Home/featureSection";
import CallToActionSection from "@/modules/Home/callToActionSection";

 
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Use a map function here to create contnent dynamic */}
      <HeaderNav />
      <div className="main-content-container"> 
      <HeroSection />
      <InfoSection /> 
      <CardSection />
      <FeatureSection />
      <CallToActionSection />
      </div>
      <FooterNav />
    </main>
  )
}
