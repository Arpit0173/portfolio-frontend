import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <Navbar />
      <div className="pt-20 flex-1">
        <About />
      </div>
      <Footer />
    </div>
  );
}