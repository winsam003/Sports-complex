import Header from '../Header';
import Footer from '../Footer';
import PasswordChange from '../PasswordChange';
import PageBanner from '../PageBanner';


export default function PasswordChangePage(){
    return(
        <div>
            <Header />
            <PageBanner />
            <PasswordChange />
            <Footer />
        </div>
    )
}