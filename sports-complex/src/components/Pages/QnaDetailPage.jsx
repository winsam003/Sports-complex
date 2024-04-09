import PageBanner from '../PageBanner';
import QnaDetail from '../QnaDetail';
import { useLocation } from 'react-router-dom';

// 문의게시판 상세 페이지
export default function QnaDetailPage() {
    const location = useLocation();
    const qnaData = location.state ? location.state.qnaData : null;

    return (
        <div>
            <PageBanner />
            <QnaDetail qnaData={qnaData} />
        </div>
    )
}