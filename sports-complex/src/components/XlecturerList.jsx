import './XlecturerList.css';

export default function XlecturerList({ teachnum, teachcode, teachname, teachbirth, teachphone, teachadress, teachadress1, teachadress2, teachlicense, teachaccount, onToggleCheckbox, isChecked }) {
    const handleCheckboxChange = (e) => {
        onToggleCheckbox(teachnum);
    }

    const formatDate = (teachbirth) => {
        const date = new Date(teachbirth);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}.${month}.${day}`;
    };

    return (
        <div>
            <div className='XlectureInfoList_content'>
                <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                <span>{teachnum}</span>
                <span>{teachcode}</span>
                <span>{teachname}</span>
                <span>{formatDate(teachbirth)}</span>
                <span>{teachphone}</span>
                <span>
                    {teachadress}<br />
                    {teachadress1}{teachadress2}
                </span>
                <span>{teachlicense}</span>
                <span>{teachaccount}</span>
            </div>
        </div>
    )
}