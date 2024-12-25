// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/navbar';
import { HeroSection } from './components/hero-section';
import { TopicsGrid } from './components/topics-grid';
import JavaScript from './components/javaScript/page';
import ReactJS from './components/react/page';
import MachineCoding from './components/machine-coding/page';
import DSAFrontend from './components/dsa-frontend/page';
import Blogs from './components/tech-blogs/page';


const HomePage = () => (
  <>
    <HeroSection />
    <TopicsGrid/>
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
        <Route path="/tech-blogs" element={<Blogs />} />

        <Route path="*" element={<div>404 Not Found</div>} />
      
      </Routes>
    </Router>
  );
}

export default App;