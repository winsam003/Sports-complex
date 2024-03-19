import './SugangReciptInfo.css'
import Submenu from './Submenu';
import SugangReciptInfo from './SugangReciptInfo';
import SugangSearchBox from './SugangSearchBox';
import SearchButton from './SearchButton'
import SugangSearchList from './SugangSearchList';

export default function SugangContent() {
    return (
        <div>
            <div className='board_div'>
                <Submenu />
                <SugangReciptInfo />
                <SugangSearchBox />
                <SearchButton />
                <SugangSearchList />
            </div>
        </div>
    )
}