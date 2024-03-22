import Xheader from '../Xheader';
import PageBanner from '../PageBanner';
import XEventBoardWriteContent from '../XEventBoardWriteContent';

// 이벤트 게시글 등록
export default function XEventBoardWritePage() {
    return (
        <div>
            <Xheader />
            <PageBanner />
            <XEventBoardWriteContent />
        </div>
    )
}