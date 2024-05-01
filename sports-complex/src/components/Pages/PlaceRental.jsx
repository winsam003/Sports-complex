import { useEffect } from 'react';
import PageBanner from '../PageBanner';
import PlaceRentalContent from '../PlaceRentalContent';

// 대관 신청
export default function PlaceRental({ getUserName, getUserID}) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <PageBanner />
            <PlaceRentalContent getUserName={getUserName} getUserID={getUserID}/>
        </div>
    )
}