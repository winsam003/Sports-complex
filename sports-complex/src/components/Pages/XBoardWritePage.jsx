import Header from '../Header';
import Footer from '../Footer';
import PageBanner from '../PageBanner';
import XBoardWriteContent from '../XBoardWriteContent';

// 공지사항
export default function XBoardWritePage() {
    return (
        <div>
            <Header />
            <PageBanner />
            <XBoardWriteContent />
            <Footer />
        </div>
    )
}