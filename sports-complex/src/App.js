import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
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

import XmanagementPage from './components/Pages/XmanagementPage';
import XBoardWritePage from './components/Pages/XBoardWritePage';
import XEventBoardWritePage from './components/Pages/XEventBoardWritePage';
import XFaqBoardWritePage from './components/Pages/XFaqBoardWritePage';
import XQnaBoardAnswerPage from './components/Pages/XQnaBoardAnswerPage';
import UserInfoPage from './components/Pages/XuserInfoPage';
import XmainEvent from './components/XmainEvent';
import XBoardControllPage from './components/Pages/XBoardControllPage';
import XEventBoardControllPage from './components/Pages/XEventBoardControllPage';
import XFaqBoardControllPage from './components/Pages/XFaqBoardControllPage';
import XQnaBoardControllPage from './components/Pages/XQnaBoardControllPage';
import XRentalPlaceControllPage from './components/Pages/XRentalPlaceControllPage';
import XReantalPlaceNewonePage from './components/Pages/XReantalPlaceNewonePage';
import XReantalPlaceDetailPage from './components/Pages/XReantalPlaceDetailPage';
import XlecturePage from './components/Pages/XlecturePage';
import XlecturerRegisterPage from './components/Pages/XlecturerRegisterPage';
import XParkingControllPage from './components/Pages/XParkingControllPage';
import XlectureInfoPage from './components/Pages/XlectureInfoPage';
import XNewClassUploadPage from './components/Pages/XNewClassUploadPage';
import XSugangRequestPage from './components/Pages/XSugangRequestPage';
import XRentalPlaceRequestControllPage from './components/Pages/XRentalPlaceRequestControllPage';
import XStaffInfoPage from './components/Pages/XStaffInfoPage';
import XStaffRegisterPage from './components/Pages/XStaffRegisterPage';
import Footer from './components/Footer';
import Xheader from './components/Xheader';
import Header from './components/Header';

function App() {

  // admin 모드, 사용자 모드를 확인하고 header를 바꿔주기 위한 hook
  const [isAdminPage, setIsAdminPage] = useState(false);

  const checkAdminPage = () => {
    setIsAdminPage(!isAdminPage);
  }


  

  return (
    <div>


      {isAdminPage ? <Xheader checkAdminPage={checkAdminPage} /> : <Header checkAdminPage={checkAdminPage} />}

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/JoinPage1' element={<JoinPage1 />} />
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

        <Route path='/XmanagementPage' element={<XmanagementPage />} />
        <Route path='/XBoardWritePage' element={<XBoardWritePage />} />
        <Route path='/XEventBoardWritePage' element={<XEventBoardWritePage />} />
        <Route path='/XFaqBoardWritePage' element={<XFaqBoardWritePage />} />
        <Route path='/XQnaBoardAnswerPage' element={<XQnaBoardAnswerPage />} />
        <Route path='/UserInfoPage' element={<UserInfoPage />} />
        <Route path='/XmainEvent' element={<XmainEvent />} />
        <Route path='/XBoardControllPage' element={<XBoardControllPage />} />
        <Route path='/XEventBoardControllPage' element={<XEventBoardControllPage />} />
        <Route path='/XFaqBoardControllPage' element={<XFaqBoardControllPage />} />
        <Route path='/XQnaBoardControllPage' element={<XQnaBoardControllPage />} />
        <Route path='/XRentalPlaceControllPage' element={<XRentalPlaceControllPage />} />
        <Route path='/XReantalPlaceNewonePage' element={<XReantalPlaceNewonePage />} />
        <Route path='/XReantalPlaceDetailPage' element={<XReantalPlaceDetailPage />} />
        <Route path='/XlecturePage' element={<XlecturePage />} />
        <Route path='/XlecturerRegisterPage' element={<XlecturerRegisterPage />} />
        <Route path='/XParkingControllPage' element={<XParkingControllPage />} />
        <Route path='/XlectureInfoPage' element={<XlectureInfoPage />} />
        <Route path='XNewClassUploadPage' element={<XNewClassUploadPage />} />
        <Route path='/XSugangRequestPage' element={<XSugangRequestPage />} />
        <Route path='/XRentalPlaceRequestControllPage' element={<XRentalPlaceRequestControllPage />} />
        <Route path='/XStaffInfoPage' element={<XStaffInfoPage />} />
        <Route path='/XStaffRegisterPage' element={<XStaffRegisterPage />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>



      <Footer />
    </div>
  );
}

export default App;