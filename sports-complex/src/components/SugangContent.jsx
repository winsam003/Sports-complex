import './SugangReciptInfo.css'
import Submenu from './Submenu';
import SugangReciptInfo from './SugangReciptInfo';
import XclassSearchBox from './XclassSearchBox';
import SearchButton from './SearchButton'
import SugangSearchList from './SugangSearchList';

export default function SugangContent() {
    return (
        <div>
            <div className='board_div'>
                <Submenu />
                <div className='board_div_div'>
                    <SugangReciptInfo />
                    <XclassSearchBox />
                    <SearchButton />
                    <SugangSearchList />
                </div>
            </div>
        </div>
    )
}