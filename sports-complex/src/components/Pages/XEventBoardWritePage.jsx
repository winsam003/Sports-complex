import Header from '../Header';
import Footer from '../Footer';
import PageBanner from '../PageBanner';
import Submenu from '../Submenu';
import XEventBoardWriteContent from '../XEventBoardWriteContent';

// 이벤트 게시글 등록
export default function XEventBoardWritePage() {
    return (
        <div>
            <Header />
            <PageBanner />
            <Submenu />
            <XEventBoardWriteContent />
            <Footer />
        </div>
    )
}