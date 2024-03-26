import './XStaffdetail.css';

export default function XStaffdetail({ stfid, stfpassword, stfdmp, stflevel, stfpnum, stfname, staffdelete }) {

    const handleDelete = (e) => {
        staffdelete(stfid);
    }

    return (
        <div className='XStaffdetail_contents'>
            <input type="checkbox" onChange={handleDelete} />
            <span>{stfid}</span>
            <span>{stfpassword}</span>
            <span>{stfdmp}</span>
            <span>{stflevel}</span>
            <span>{stfpnum}</span>
            <span>{stfname}</span>
        </div>
    )
}