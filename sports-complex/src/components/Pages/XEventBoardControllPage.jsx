import Xheader from '../Xheader';
import PageBanner from '../PageBanner';
import XBoardControllContent from '../XBoardControllContent';

// 이벤트 게시글 관리
export default function XEventBoardControllPage() {
    return (
        <div>
            <Xheader />
            <PageBanner />
            <XBoardControllContent />
        </div>
    )
}