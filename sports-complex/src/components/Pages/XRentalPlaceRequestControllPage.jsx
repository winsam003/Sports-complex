import PageBanner from '../PageBanner';
import XRentalPlaceRequestControll from '../XRentalPlaceRequestControll';

// 대관 신청 관리
export default function XRentalPlaceRequestControllPage({ token }) {
    return (
        <div>
            <PageBanner />
            <XRentalPlaceRequestControll token = {token}/>
        </div>
    )
}