import Xheader from '../Xheader';
import Submenu from '../Submenu';
import Footer from '../Footer';
import PageBanner from '../PageBanner';
import XmainEvent from '../XmainEvent';

export default function ManagementPage() {
    return (
        <div>
            <Xheader />
            <PageBanner />
            <XmainEvent />
            <Submenu />
            <Footer />
        </div>
    )
}