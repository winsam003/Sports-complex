import PageBanner from "../PageBanner";
import XStaffRegister from "../XStaffRegister";

export default function XStaffRegisterPage({ roleList }) {
    return (
        <div>
            <PageBanner />
            <XStaffRegister roleList={roleList} />
        </div>
    )
}