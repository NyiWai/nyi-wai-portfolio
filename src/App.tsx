import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScanlineOverlay from "./components/ScanlineOverlay";
import ErrorBoundary from "./components/ErrorBoundary";


const StarfieldBackground = lazy(() => import("./components/StarfieldBackground"));

export default function App() {
  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={null}>
          <StarfieldBackground />
        </Suspense>
      </ErrorBoundary>
      <ScanlineOverlay />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
