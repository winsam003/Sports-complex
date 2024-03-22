import Xheader from '../Xheader';
import PageBanner from '../PageBanner';
import XBoardControllContent from '../XBoardControllContent';

// 공지사항 관리
export default function XBoardControllPage() {
    return (
        <div>
            <Xheader />
            <PageBanner />
            <XBoardControllContent />
        </div>
    )
}