
import './BoardSearchList2.css'

export default function BoardSearchList2({notnum, nottitle, stfid, notdate}) {

    return (
        <div>
            <div className='BoardSearchList_content2'>
                <span>{notnum}</span>
                <span>{nottitle}</span>
                <span>{stfid}</span>
                <span>{notdate}</span>
            </div>
        </div>
    )
}