import Header from '../Header';
import Footer from '../Footer';
import PageBanner from '../PageBanner';
import XFaqBoardWriteContent from '../XFaqBoardWriteContent';

// 공지사항
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