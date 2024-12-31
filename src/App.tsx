// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { TopicsGrid } from "./components/topics-grid";
import JavaScript from "./components/javaScript/page";
import ReactJS from "./components/react/page";
import MachineCoding from "./components/machine-coding/page";
import DSAFrontend from "./components/dsa-frontend/page";
import Blogs from "./components/tech-blogs/page";
import FrontendSystemDesign from "./components/frontend-systemdesign/page";
import UITechnologies from "./components/ui-technologies/page";
import { UILibraries } from "./components/best-ui";
import { BestFrameworks } from "./components/best-framework";
import { FAQSection } from "./components/faq-section";
import { Footer } from "./components/footer";
import { motion } from "framer-motion";
import { AboutSection } from "./components/about-section";
import { TestimonialSection } from "./components/testimonial";
import AboutPage from "./components/team-members";
import FrontendRoadmap from "./components/roadmap/frontend-roadmap";
import BackendRoadmap from "./components/roadmap/backend-roadmap";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

const HomePage = () => (
  <>
    <HeroSection />
    <motion.div variants={itemVariants}>
      <TopicsGrid />
    </motion.div>
    <AboutSection />
    <UILibraries />
    <BestFrameworks />
    <TestimonialSection/>
    <motion.div variants={itemVariants}>
      <AboutPage />
    </motion.div>
    <FAQSection />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/javascript-page" element={<JavaScript />} />
        <Route path="/react-js" element={<ReactJS />} />
        <Route path="/machine-coding" element={<MachineCoding />} />
        <Route path="/dsa-frontend" element={<DSAFrontend />} />
        <Route path="/system-design" element={<FrontendSystemDesign />} />
        <Route path="/tech-blogs" element={<Blogs />} />
        <Route path="/ui-ux" element={<UITechnologies />} />
        <Route path="/frontend-roadmap" element={<FrontendRoadmap />} />
        <Route path="/backend-roadmap" element={<BackendRoadmap />} />

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
