import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
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
import QnaDetailPage from './components/Pages/QnaDetailPage';
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
import XClassesInfoControl from './components/Pages/XClassesInfoControl';
import XNewClassUploadPage from './components/Pages/XNewClassUploadPage';
import XSugangRequestPage from './components/Pages/XSugangRequestPage';
import XRentalPlaceRequestControllPage from './components/Pages/XRentalPlaceRequestControllPage';
import XStaffInfoPage from './components/Pages/XStaffInfoPage';
import XStaffRegisterPage from './components/Pages/XStaffRegisterPage';
import XBoardControllPageDetailPage from './components/Pages/XBoardControllPageDetailPage';
import XBoardControllInsertPage from './components/Pages/XBoardControllInsertPage';

import Footer from './components/Footer';
import Xheader from './components/Xheader';
import Header from './components/Header';
import XEventDetailPage from './components/Pages/XEventDetailPage';

function App() {

  const [loginCheck, setLogincheck] = useState(false);


  // 로그인 / 로그아웃
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.clear();
    alert("로그아웃 되었습니다.");
    navigate('/'); // 기본 홈 페이지로 이동
    window.location.reload(); // 현재 페이지 새로 고침
  }

  let getUserName;
  let getUserID;
  let token;
  let roleList;


  if (sessionStorage.getItem('userData') != null) {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData.name != null){     // 사용자일 경우 
      getUserName = userData.name;
      getUserID = userData.id;
      token = userData.token;
      roleList = userData.roleList
    }else{                          // 직원일 경우
      getUserName = userData.stfname;
      getUserID = userData.stfid;
      token = userData.token;
      roleList = userData.roleList
    }
  }

  // admin 모드, 사용자 모드를 확인하고 header를 바꿔주기 위한 hook
  const [isAdminPage, setIsAdminPage] = useState(false);
  const checkAdminPage = (e) => {

    if (roleList && roleList.length > 0){
      if (roleList.some(item=>item==="ADMIN" || item==="MANAGER")){
        setIsAdminPage(!isAdminPage);
      }else{
        e.preventDefault();
        alert("관리자 권한이 없습니다.");
      }
    }else{
      e.preventDefault();
      alert("관리자 로그인을 해야 이용하실 수 있습니다.");
    }

    
  }
  
  return (
    <div>


      {isAdminPage ?
        <Xheader checkAdminPage={checkAdminPage} logout={logout} getUserName={getUserName} />
        :
        <Header checkAdminPage={checkAdminPage} logout={logout} getUserName={getUserName} />}

      <Routes>
        <Route path='/' element={<HomePage setLogincheck={setLogincheck} loginCheck={loginCheck} logout={logout} getUserName={getUserName} getUserID={getUserID} />} />
        <Route path='/JoinPage1' element={<JoinPage1 />} />
        <Route path='/JoinPage1' element={<JoinPage1 />} />
        <Route path='/JoinPage2' element={<JoinPage2 />} />
        <Route path='/JoinPage3' element={<JoinPage3 />} />
        <Route path='/JoinPage4' element={<JoinPage4 />} />
        <Route path='/BoardPage' element={<BoardPage />} />
        <Route path='/FacilityInformationPage' element={<FacilityInformationPage />} />
        <Route path='/FrequentlyAskedPage' element={<FrequentlyAskedPage />} />
        <Route path='/LoginPage' element={<LoginPage setLogincheck={setLogincheck} loginCheck={loginCheck} />} />
        <Route path='/FindPasswordPage' element={<FindPasswordPage />} />
        <Route path='/FindIDPage' element={<FindIDPage />} />
        <Route path='/Inquiry' element={<Inquiry />} />
        <Route path='/EventBoardPage' element={<EventBoardPage />} />
        <Route path='/EventDetailPage' element={<EventDetailPage />} />
        <Route path='/Faq' element={<Faq />} />
        <Route path='/Qna' element={<Qna />} />
        <Route path='/QnaDetailPage' element={<QnaDetailPage />} />
        <Route path='/Sugang' element={<Sugang />} />
        <Route path='/ClassSchedulePage' element={<ClassSchedulePage />} />
        <Route path='/PasswordChangePage' element={<PasswordChangePage getUserID={getUserID} />} />
        <Route path='/PasswordChangePage2' element={<PasswordChangePage2 />} />
        <Route path='/ModifyMemberPage' element={<ModifyMemberPage getUserID={getUserID} />} />
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
        <Route path='/XBoardWritePage' element={<XBoardWritePage getUserID={getUserID} />} />
        <Route path='/XEventBoardWritePage' element={<XEventBoardWritePage getUserID={getUserID} />} />
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
        <Route path='/XClassesInfoControl' element={<XClassesInfoControl />} />
        <Route path='/XNewClassUploadPage' element={<XNewClassUploadPage />} />
        <Route path='/XSugangRequestPage' element={<XSugangRequestPage />} />
        <Route path='/XRentalPlaceRequestControllPage' element={<XRentalPlaceRequestControllPage />} />
        <Route path='/XStaffInfoPage' element={<XStaffInfoPage />} />
        <Route path='/XStaffRegisterPage' element={<XStaffRegisterPage roleList={roleList} />} />
        <Route path='/XBoardControllPageDetailPage' element={<XBoardControllPageDetailPage />} />
        <Route path='/XBoardControllInsertPage' element={<XBoardControllInsertPage />} />

        <Route path='/XEventDetailPage' element={<XEventDetailPage />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>



      <Footer />
    </div>
  );
}

export default App;