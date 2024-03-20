import Header from '../Header';
import PageBanner from '../PageBanner';
import InfoHandlingPolicy from '../InfoHandlingPolicy';
import Footer from '../Footer';

// 개인정보처리방침
export default function InfoHandlingPolicyPage() {
    return (
        <div>
            <Header />
            <PageBanner />
            <InfoHandlingPolicy />
            <Footer />
        </div>
    )
}