import ApplicationDetails from '../ApplicationDetails';
import PageBanner from '../PageBanner';

export default function ApplicationDetailsPage({ token, getUserID }) {


    

    return (
        <div>
            <PageBanner />
            <ApplicationDetails token={token} getUserID={getUserID} />
        </div>
    )

}