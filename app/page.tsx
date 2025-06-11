import Container from "@/components/Container";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Background from "@/components/Background";
import Projects from "@/components/Projects";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <>
      <Background />
      <Container className="flex flex-col">
        <Hero />
        <About />
        <Projects />
        <BlogSection />
      </Container>
    </>
  );
}
