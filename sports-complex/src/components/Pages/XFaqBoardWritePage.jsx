import Header from '../Header';
import Footer from '../Footer';
import PageBanner from '../PageBanner';
import XFaqBoardWriteContent from '../XFaqBoardWriteContent';

// 자주하는질문 등록
export default function XFaqBoardWritePage() {
    return (
        <div>
            <Header />
            <PageBanner />
            <XFaqBoardWriteContent />
            <Footer />
        </div>
    )
}