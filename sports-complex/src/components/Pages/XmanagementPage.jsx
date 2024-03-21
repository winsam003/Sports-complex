import Xheader from '../Xheader';
import Submenu from '../Submenu';
import Footer from '../Footer';
import PageBanner from '../PageBanner';

export default function ManagementPage() {
    return (
        <div>
            <Xheader />
            <PageBanner />
            <Submenu />
            <Footer />
        </div>
    )
}