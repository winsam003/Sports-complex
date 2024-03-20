import './Subtitle.css'
import {Link} from 'react-router-dom';


export default function Subtitle({parameter, page}) {
    return (
        <div>
            <Link to={`/${parameter}`} className='subtitle_p'>{page}</Link>
        </div>
    )
}