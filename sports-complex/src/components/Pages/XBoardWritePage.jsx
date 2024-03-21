import Header from '../Header';
import Footer from '../Footer';
import PageBanner from '../PageBanner';
import Submenu from '../Submenu';
import XBoardWriteContent from '../XBoardWriteContent';

// 공지사항 등록
export default function XBoardWritePage() {
    return (
        <div>
            <Header />
            <PageBanner />
            <Submenu />
            <XBoardWriteContent />
            <Footer />
        </div>
    )
}