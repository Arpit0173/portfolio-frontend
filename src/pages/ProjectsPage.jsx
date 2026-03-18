import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <Navbar />
      <div className="pt-20 flex-1">
        <Projects />
      </div>
      <Footer />
    </div>
  );
}