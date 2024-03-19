import FacilityInformation from '../FacilityInformation';
import Header from '../Header';
import PageBanner from '../PageBanner';
import Footer from '../Footer';

// 체육 시설 안내
export default function FacilityInformationPage() {
    return (
        <div>
            <Header />
            <PageBanner />
            <FacilityInformation />
            <Footer />
        </div>
    );
};