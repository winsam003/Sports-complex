import PageBanner from '../PageBanner';
import TermsAndConditions from '../TermsAndConditions';
import UserTypeAgree from '../UserTypeAgree';


export default function JoinPage1(){

    const nextPage = window.location.pathname.replace("/", "");

    return (
        <div>
            <PageBanner />
            <TermsAndConditions />
            <UserTypeAgree nextPage={nextPage}/>
        </div>
    )
}