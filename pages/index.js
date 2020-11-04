import Layout from "../components/layout";

import Header from "../components/header";
import About from "../components/about";
import Projects from "../components/projects";
import Repos from "../components/repos";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function Home() {
  return (
    <Layout>
      <Header />
      <About />
      <Projects />
      <Repos />
      <Contact />
      <Footer />
    </Layout>
  );
}
