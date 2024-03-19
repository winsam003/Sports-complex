import Header from '../Header';
import Board from '../Board';
import Footer from '../Footer';
import PageBanner from '../PageBanner';

// 공지사항
export default function Boardpage() {
    return (
        <div>
            <Header />
            <PageBanner />
            <Board />
            <Footer />
        </div>
    )

}