import './App.css';
import Header from './components/Header';
import Banner from './components/PageBanner';
import Footer from './components/Footer';
import MiddleMenu from './components/MiddleMenu';
import Login from './components/Login';
import FindPassword from './components/FindPassword';
import JoinMember from './components/JoinMember';

function App() {
  return (
    <div>
      <Header />
      <JoinMember />
      <Footer />
    </div>

  );
}

export default App;
