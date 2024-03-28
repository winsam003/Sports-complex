import './XStaffdetail.css';

export default function XStaffdetail({ stfid, stfpassword, stfdmp, stflevel, stfpnum, stfname, stfcode, onToggleCheckbox, isChecked }) {

    console.log('XStaffdetail rendered');

    const handleCheckboxChange = () => {
        onToggleCheckbox(stfid);
    };

    console.log(stfdmp);

    return (
        <div className='XStaffdetail_contents'>
            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
            <span>{stfid}</span>
            <span>{stfpassword}</span>
            <span>{stfdmp}</span>
            <span>{stflevel}</span>
            <span>{stfpnum}</span>
            <span>{stfname}</span>
            <span>{stfcode}</span>
        </div>
    )
}