import PageBanner from '../PageBanner';
import HomeDetail from '../HomeDetail';
import MiddleMenu from '../MiddleMenu';

export default function HomePage({ setLogincheck, loginCheck, logout, getUserName, getUserID }) {
    return (
        <div>
            <PageBanner />
            <HomeDetail setLogincheck={setLogincheck} loginCheck={loginCheck} logout={logout} getUserName={getUserName} getUserID={getUserID} />
            <MiddleMenu />
        </div>
    )
}