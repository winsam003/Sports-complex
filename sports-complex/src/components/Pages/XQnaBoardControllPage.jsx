import Xheader from '../Xheader';
import PageBanner from '../PageBanner';
import XQnaControllContent from '../XQnaControllContent';

// 문의게시판 관리
export default function XQnaBoardControllPage() {
    return (
        <div>
            <Xheader />
            <PageBanner />
            <XQnaControllContent />
        </div>
    )
}