import './App.css';
import Header from './components/Header';
import Banner from './components/PageBanner';
import Footer from './components/Footer';
import MiddleMenu from './components/MiddleMenu';
import FacilityInformation from "./components/FacilityInformation";

function App() {
  return (
    <div>
      <Header />
      <FacilityInformation />
      <Footer />
    </div>

  );
}

export default App;
