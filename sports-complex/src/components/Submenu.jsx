import './Submenu.css'
import Subtitle from './Subtitle'
import { PageBannerData as PageInfo } from './PageBannerData'


export default function Submenu() {
    const currentPage = window.location.pathname.replace("/", "");
    let findCurrentPageAll = {
        "id": "",
        "parameter": '',
        "page": '',
        "title": ''
    }

    const findCurrentPage = PageInfo.filter((page) => page.parameter === currentPage);
    findCurrentPageAll = PageInfo.filter((page) => page.id === findCurrentPage[0].id);

    return (
        <div>
            <div className='submenu_div'>
                {/* <div className='submenu_fixed_div'> */}
                    {findCurrentPageAll.map((it) => (<Subtitle parameter={it.parameter} page={it.page} />))}
                {/* </div> */}
            </div>
        </div>
    )
}
