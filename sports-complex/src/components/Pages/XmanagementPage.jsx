import Xheader from '../Xheader';
import Footer from '../Footer';
import PageBanner from '../PageBanner';
import XmainEvent from '../XmainEvent';

export default function ManagementPage() {
    return (
        <div>
            <Xheader />
            <PageBanner />
            <XmainEvent />
            <Footer />
        </div>
    )
}