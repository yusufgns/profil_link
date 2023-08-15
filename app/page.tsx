import { Hero as SocialMedia } from "@/components/Hero/hero.constant"
import Hero from "@/components/Hero"
import Work from "@/components/Work"
import Skills from "@/components/Skills"
import Footer from "@/components/Footer"
import Layout from "@/components/Layout/MainHeader"

export default function Home() {
  const HeroIcon = SocialMedia()
  return (
    <Layout>
      <Hero />
      <Work />
      <Skills />
    </Layout>
  )
}
