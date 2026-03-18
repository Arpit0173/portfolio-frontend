import Navbar from '../components/Navbar';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <Navbar />
      <div className="pt-20 flex-1">
        <Skills />
      </div>
      <Footer />
    </div>
  );
}