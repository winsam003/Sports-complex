import './XStaffdetail.css';

export default function XStaffdetail({ stfid, stfpassword, stfdmp, stflevel, stfpnum, stfname, onToggleCheckbox, isChecked }) {

    const handleCheckboxChange = () => {
        onToggleCheckbox(stfid);
    };

    return (
        <div className='XStaffdetail_contents'>
            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
            <span>{stfid}</span>
            <span>{stfpassword}</span>
            <span>{stfdmp}</span>
            <span>{stflevel}</span>
            <span>{stfpnum}</span>
            <span>{stfname}</span>
        </div>
    )
}