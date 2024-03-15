import Header from '../Header';
import PageBanner from '../PageBanner';
import Footer from '../Footer';
import TermsAndConditions from '../TermsAndConditions';
import UserTypeAgree from '../UserTypeAgree';
import { useParams } from 'react-router-dom';


export default function JoinPage1(){

    const { id } = useParams();

    const nextPage = () => {
        
    }

    return (
        <div>
            <Header />
            <PageBanner />
            <TermsAndConditions />
            <UserTypeAgree id={id}/>
            <Footer />
        </div>
    )
}