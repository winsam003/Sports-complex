import PageBanner from '../PageBanner';
import PlaceRentalContent from '../PlaceRentalContent';

// 대관 신청
export default function PlaceRental({ getUserName, getUserID}) {
    return (
        <div>
            <PageBanner />
            <PlaceRentalContent getUserName={getUserName} getUserID={getUserID}/>
        </div>
    )
}