import PageBanner from '../PageBanner';
import QnaDetail from '../QnaDetail';
import { useLocation } from 'react-router-dom';

// 문의게시판 상세 페이지
export default function QnaDetailPage() {
    const location = useLocation();
    // const { qnaData } = location.state;
    console.log("QnaDetailPage 부모 컴포넌트 location :", location);
    console.log("QnaDetailPage 부모 컴포넌트 location.state :", location.state);
    const qnaData = location.state ? location.state.qnaData : null;
    console.log("QnaDetailPage 부모 컴포넌트 qnaData ", qnaData);

    return (
        <div>
            <PageBanner />
            <QnaDetail qnaData={qnaData} />
        </div>
    )
}