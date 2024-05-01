import PageBanner from "../PageBanner";
import XuserInfo from "../XuserInfo";


export default function XuserInfoPage({ token }) {
    return (
        <div>
            <PageBanner />
            <XuserInfo token={token} />
        </div>
    )
}