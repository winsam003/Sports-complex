import Header from '../Header';
import Footer from '../Footer';
import PageBanner from '../PageBanner';
import XEventBoardWriteContent from '../XEventBoardWriteContent';

// 공지사항
export default function XEventBoardWritePage() {
    return (
        <div>
            <Header />
            <PageBanner />
            <XEventBoardWriteContent />
            <Footer />
        </div>
    )
}