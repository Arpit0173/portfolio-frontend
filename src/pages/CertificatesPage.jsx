import Navbar from '../components/Navbar';
import Certificates from '../components/Certificates';
import Footer from '../components/Footer';

export default function CertificatesPage() {
  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <Navbar />
      <div className="pt-20 flex-1">
        <Certificates />
      </div>
      <Footer />
    </div>
  );
}