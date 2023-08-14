import { Hero as SocialMedia } from "@/components/Hero/hero.constant"
import Hero from "@/components/Hero"
import Work from "@/components/Work"
import Skills from "@/components/Skills"
import Footer from "@/components/Footer"

export default function Home() {
  const HeroIcon = SocialMedia()
  return (
    <main className="flex flex-col space-y-16">
      <Hero />
      <Work />
      <Skills />
      <Footer />
    </main>
  )
}
