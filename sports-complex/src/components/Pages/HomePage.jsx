import PageBanner from '../PageBanner';
import HomeDetail from '../HomeDetail';
import MiddleMenu from '../MiddleMenu';

export default function HomePage({ setLogincheck, loginCheck, logout, getUserName, roleList }) {
    return (
        <div>
            <PageBanner />
            <HomeDetail setLogincheck={setLogincheck} loginCheck={loginCheck} logout={logout} getUserName={getUserName} roleList={roleList} />
            <MiddleMenu />
        </div>
    )
}