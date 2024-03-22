import Header from '../Header';
import PageBanner from '../PageBanner';
import QnaBoard from '../QnaBoard'
import Footer from '../Footer';

// 문의게시판
export default function Qna() {
    return (
        <div>
            <Header />
            <PageBanner />
            <QnaBoard />
            <Footer />
        </div>
    )
}