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
import PlaceRentalInfo from './components/Pages/PlaceRentalInfo';
import PlaceRental from './components/Pages/PlaceRental';
import ParkingRequest from './components/Pages/ParkingRequest';
import ApplicationDetailsPage from './components/Pages/ApplicationDetailsPage';
import InfoHandlingPolicyPage from './components/Pages/InfoHandlingPolicyPage';
import VideoHandlePage from './components/Pages/VideoHandlePage';
import EmailCollectRefusal from './components/Pages/EmailCollectRefusal';
import VisitWayPage from './components/Pages/VisitWayPage';
import NotFoundPage from './components/Pages/NotFoundPage';

import ManagementPage from './components/Pages/XmanagementPage';
import XBoardWritePage from './components/Pages/XBoardWritePage';
import XEventBoardWritePage from './components/Pages/XEventBoardWritePage';
import XFaqBoardWritePage from './components/Pages/XFaqBoardWritePage';
import XQnaBoardAnswerPage from './components/Pages/XQnaBoardAnswerPage';
import UserInfoPage from './components/Pages/XuserInfoPage';
import XmainEvent from './components/XmainEvent';

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
        <Route path='/PlaceRentalInfo' element={<PlaceRentalInfo />} />
        <Route path='/PlaceRental' element={<PlaceRental />} />
        <Route path='/ParkingRequest' element={<ParkingRequest />} />
        <Route path='/ApplicationDetailsPage' element={<ApplicationDetailsPage />} />
        <Route path='/InfoHandlingPolicyPage' element={<InfoHandlingPolicyPage />} />
        <Route path='/VideoHandlePage' element={<VideoHandlePage />} />
        <Route path='/EmailCollectRefusal' element={<EmailCollectRefusal />} />
        <Route path='/VisitWayPage' element={<VisitWayPage />} />

        <Route path='/ManagementPage' element={<ManagementPage />} />
        <Route path='/XBoardWritePage' element={<XBoardWritePage />} />
        <Route path='/XEventBoardWritePage' element={<XEventBoardWritePage />} />
        <Route path='/XFaqBoardWritePage' element={<XFaqBoardWritePage />} />
        <Route path='/XQnaBoardAnswerPage' element={<XQnaBoardAnswerPage />} />
        <Route path='/UserInfoPage' element={<UserInfoPage />} />
        <Route path='/XmainEvent' element={<XmainEvent />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;