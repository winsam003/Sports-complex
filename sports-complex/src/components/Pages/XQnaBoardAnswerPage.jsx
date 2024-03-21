import Header from '../Header';
import Footer from '../Footer';
import PageBanner from '../PageBanner';
import XQnaBoardAnswerContent from '../XQnaBoardAnswerContent';

// 문의게시판 답글등록
export default function XQnaBoardAnswerPage() {
    return (
        <div>
            <Header />
            <PageBanner />
            <XQnaBoardAnswerContent />
            <Footer />
        </div>
    )
}