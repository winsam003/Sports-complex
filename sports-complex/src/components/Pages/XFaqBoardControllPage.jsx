import Xheader from '../Xheader';
import PageBanner from '../PageBanner';
import XFaqControllContent from '../XFaqControllContent';

// 자주하는질문 게시판 관리
export default function XFaqBoardControllPage() {
    return (
        <div>
            <Xheader />
            <PageBanner />
            <XFaqControllContent />
        </div>
    )
}