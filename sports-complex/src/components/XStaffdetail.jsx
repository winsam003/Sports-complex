import { useNavigate } from 'react-router';
import './XStaffdetail.css';

export default function XStaffdetail({ stfid, stfdmp, stflevel, stfpnum, stfname, stfcode, onToggleCheckbox, isChecked }) {
    const handleCheckboxChange = () => {
        onToggleCheckbox(stfid);
    };

    const navigate = useNavigate();
    const boardDetail = () => {
        navigate(`/XStaffModifyPage?stfid=${stfid}`, {
            state: {
                stfid: stfid,
                stfdmp: stfdmp,
                stflevel: stflevel,
                stfpnum: stfpnum,
                stfname: stfname,
                stfcode: stfcode,
            }
        });
    }

    return (
        <div className='XStaffdetail_contents' onClick={boardDetail}>
            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
            <span>{stfid}</span>
            <span>{stfdmp}</span>
            <span>{stflevel}</span>
            <span>{stfpnum}</span>
            <span>{stfname}</span>
            <span>{stfcode}</span>
        </div>
    )
}