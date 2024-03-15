import Header from '../Header';
import PageBanner from '../PageBanner';
import Footer from '../Footer';
import UserType from '../UserType';
import UserTypeAgree from '../UserTypeAgree';
import { useParams } from 'react-router-dom';

export default function JoinPage2() {
    const { id } = useParams();
    console.log(`id=${id}`);
    return (
        <div>
            <Header />
            <PageBanner />
            {/* <UserType /> */}
            <UserTypeAgree id={id}/>
            <Footer />
        </div>
    )
}