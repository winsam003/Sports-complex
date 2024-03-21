import Header from '../Header';
import Footer from '../Footer';
import PageBanner from '../PageBanner';
import Submenu from '../Submenu';
import XQnaBoardAnswerContent from '../XQnaBoardAnswerContent';

// 문의게시판 답글등록
export default function XQnaBoardAnswerPage() {
    return (
        <div>
            <Header />
            <PageBanner />
            <Submenu />
            <XQnaBoardAnswerContent />
            <Footer />
        </div>
    )
}