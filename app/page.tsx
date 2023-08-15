import Hero from "@/components/Hero"
import Work from "@/components/Home"
import Skills from "@/components/Skills"
import Layout from "@/components/Layout/MainHeader"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Work />
      <Skills />
    </Layout>
  )
}
