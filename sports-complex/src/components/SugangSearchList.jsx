import './SugangSearchList.css'


export default function SugangSearchList({ classcode, clname, clstartdate, clenddate, clfor, clcount, clwating, clprice, cltype }) {

    return (
        <div className='SugangSearchList_content'>
            <span>{classcode}</span>
            <span>{clname}</span>
            <span>{clstartdate}-{clenddate}</span>
            <span>{clfor}</span>
            <span>{clcount}</span>
            <span>{clwating}</span>
            <span>{clprice}</span>
            <span>{cltype}</span>
        </div>
    )
}