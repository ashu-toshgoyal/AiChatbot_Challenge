import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import GmailEnter from "./Components/GmailEnter";
import Mainwind from "./Mainwind";
import Detailsentry from "./Components/Detailsentry";

function AnimatedRoutes() {
  const location = useLocation();
  const containerRef = useRef(null);

  useEffect(() => {
    // fade in when location changes
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power2.out" }
    );
  }, [location]);

  return (
    <div ref={containerRef}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<GmailEnter />} />
        <Route path="/chatbot" element={<Mainwind />} />
        <Route path="/Details" element={<Detailsentry />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
