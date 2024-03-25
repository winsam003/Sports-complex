import PageBanner from '../PageBanner';
import UserType from '../UserType';
import UserTypeAgree from '../UserTypeAgree';
import RegistrationFlow from './../RegistrationFlow';

export default function JoinPage2() {
    
    const nextPage = window.location.pathname.replace("/", "");

    return (
        <div>
            <PageBanner />
            <RegistrationFlow />
            <UserType />
            <UserTypeAgree nextPage={nextPage}/>
        </div>
    )
}