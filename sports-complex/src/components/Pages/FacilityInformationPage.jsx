import FacilityInformation from '../FacilityInformation';
import Header from '../Header';
import PageBanner from '../PageBanner';
import Footer from '../Footer';

export default function FacilityInformationPage(){
    return (
        <div>
            <Header />
            <PageBanner />
            <FacilityInformation />
            <Footer />
        </div>
    );
};