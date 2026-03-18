import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <Navbar />
      <div className="pt-20 flex-1">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}