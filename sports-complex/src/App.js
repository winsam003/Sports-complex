import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import LoginPage from './components/Pages/LoginPage';
import FindIDPage from './components/Pages/FindIDPage';
import FindPasswordPage from './components/Pages/FindPasswordPage';
import JoinPage1 from './components/Pages/JoinPage1';
import JoinPage2 from './components/Pages/JoinPage2';
import JoinPage3 from './components/Pages/JoinPage3';
import JoinPage4 from './components/Pages/JoinPage4';
import BoardPage from './components/Pages/BoardPage';
import FacilityInformationPage from './components/Pages/FacilityInformationPage';
import Inquiry from './components/Pages/Inquiry';
import FrequentlyAskedPage from './components/Pages/FrequentlyAskedPage';
import EventBoardPage from './components/Pages/EventBoardPage';
import EventDetailPage from './components/Pages/EventDetailPage';
import Faq from './components/Pages/Faq';
import Qna from './components/Pages/Qna';
import Sugang from './components/Pages/Sugang';
import ClassSchedulePage from './components/Pages/ClassSchedulePage';
import PasswordChangePage from './components/Pages/PasswordChangePage';
import PasswordChangePage2 from './components/Pages/PasswordChangePage2';
import ModifyMemberPage from './components/Pages/ModifyMemberPage';
import QRCodePage from './components/Pages/QRCodePage';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/JoinPage1' element={<JoinPage1 />} />
        <Route path='/JoinPage2' element={<JoinPage2 />} />
        <Route path='/JoinPage3' element={<JoinPage3 />} />
        <Route path='/JoinPage4' element={<JoinPage4 />} />
        <Route path='/BoardPage' element={<BoardPage />} />
        <Route path='/FacilityInformationPage' element={<FacilityInformationPage />} />
        <Route path='/FrequentlyAskedPage' element={<FrequentlyAskedPage />} />
        <Route path='/LoginPage' element={<LoginPage />} />
        <Route path='/FindPasswordPage' element={<FindPasswordPage />} />
        <Route path='/FindIDPage' element={<FindIDPage />} />
        <Route path='/Inquiry' element={<Inquiry />} />
        <Route path='/EventBoardPage' element={<EventBoardPage />} />
        <Route path='/EventDetailPage' element={<EventDetailPage />} />
        <Route path='/Faq' element={<Faq />} />
        <Route path='/Qna' element={<Qna />} />
        <Route path='/Sugang' element={<Sugang />} />
        <Route path='/ClassSchedulePage' element={<ClassSchedulePage />} />
        <Route path='/PasswordChangePage' element={<PasswordChangePage />} />
        <Route path='/PasswordChangePage2' element={<PasswordChangePage2 />} />
        <Route path='/ModifyMemberPage' element={<ModifyMemberPage />} />
        <Route path='/QRCodePage' element={<QRCodePage />} />
        
      </Routes>
    </div>
  );
}

export default App;