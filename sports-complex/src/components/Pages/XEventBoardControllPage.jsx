import Xheader from '../Xheader';
import PageBanner from '../PageBanner';
import XEventControllContent from '../XEventControllContent';

// 이벤트 게시글 관리
export default function XEventBoardControllPage() {
    return (
        <div>
            <Xheader />
            <PageBanner />
            <XEventControllContent />
        </div>
    )
}