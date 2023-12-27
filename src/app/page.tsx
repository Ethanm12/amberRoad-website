import HeaderNav from "@/components/headerNav";
import FooterNav from "@/components/footerNav";
import HeroSection from "@/modules/Home/HeroSection";
import '../styles/global.scss';

 
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Use a map function here to create contnent dynamic */}
      <HeaderNav />
      <HeroSection />
      <FooterNav />
    </main>
  )
}
