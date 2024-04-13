import PageBanner from "../PageBanner";
import XStaffRegister from "../XStaffRegister";

export default function XStaffRegisterPage({ token }) {
    return (
        <div>
            <PageBanner />
            <XStaffRegister token={token} />
        </div>
    )
}