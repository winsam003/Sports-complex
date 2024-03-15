import Header from '../Header';
import PageBanner from '../PageBanner';
import Footer from '../Footer';
import TermsAndConditions from '../TermsAndConditions';
import UserTypeAgree from '../UserTypeAgree';
import { useParams } from 'react-router-dom';

export default function JoinPage3() {
    const { id } = useParams();
    console.log(`id=${id}`);
    return (
        <div>
            <Header />
            <PageBanner />
            {/* <TermsAndConditions /> */}
            <UserTypeAgree />
            <Footer />
        </div>
    )
}