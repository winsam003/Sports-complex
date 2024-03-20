import './Submenu.css'
import Subtitle from './Subtitle'
import { PageBannerData as PageInfo } from './PageBannerData'


export default function Submenu() {
    const currentPage = window.location.pathname.replace("/", "");
    let findCurrentPageAll = {
        "id": "",
        "parameter": '',
        "page": '',
        "title": '',
        "checkMenu": ''
    }

    const findCurrentPage = PageInfo.filter((page) => page.parameter === currentPage);
    findCurrentPageAll = PageInfo.filter((page) => page.id === findCurrentPage[0].id);
    findCurrentPageAll = findCurrentPageAll.filter((page) => page.checkMenu === 'Y');

    return (
        <div>
            <div className='submenu_div'>
                {findCurrentPageAll.map((it) => (<Subtitle parameter={it.parameter} page={it.page} />))}
            </div>
        </div>
    )
}
