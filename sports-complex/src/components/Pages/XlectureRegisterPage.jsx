import Xheader from "../Xheader";
import Footer from '../Footer';
import PageBanner from "../PageBanner";
import XlectureRegister from "../XlectureRegister";

export default function XlectureRegisterPage(){
    return(
        <div>
            <Xheader />
            <PageBanner />
            <XlectureRegister />
            <Footer />
        </div>
    )
}