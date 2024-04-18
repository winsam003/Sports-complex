import './XRentalPlaceRequestControllList.css'


export default function XRentalPlaceRequestControll({ sprnum, spacecode, sprdate, id, appphonenum, sprstate, appdate }) {
    return (
        <div className='XRentalPlaceRequestControll_SearchList'>
            <div className='XRentalPlaceRequestControll_content'>
                <span className='XRentalPlaceRequestControll_span'>
                    <input type='checkbox'></input>
                </span>
                <p>{sprnum}</p>
                <p>{spacecode.spacename}</p>
                <p>{sprdate}</p>
                <p>{id ? id.name : ""}</p>
                <p>{appphonenum}</p>
                <p>{appdate}</p>
                <p>{sprstate}</p>
            </div>
        </div>
    )
}
