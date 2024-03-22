import Xheader from "../Xheader";
import Footer from '../Footer';
import PageBanner from "../PageBanner";
import XlecturerRegister from "../XlecturerRegister";

export default function XlecturerRegisterPage(){
    return(
        <div>
            <Xheader />
            <PageBanner />
            <XlecturerRegister />
            <Footer />
        </div>
    )
}