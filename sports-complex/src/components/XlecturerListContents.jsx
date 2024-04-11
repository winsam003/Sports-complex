import './XlecturerListContents.css';

export default function XlectureListContents({ teachNum, teachCode, teachName, teachBirth, teachPhone, teachAdress, teachLicense, lectureDelete, teachAccount }) {

    const handleDelete = (e) => {
        lectureDelete(teachNum, e.target.checked);
    }

    return (
        <div className='XlectureListContents_Box'>
            <div className='XlectureListContents_contents'>
                <input type="checkbox" onChange={handleDelete} />
                <span>{teachNum}</span>
                <span>{teachCode}</span>
                <span>{teachName}</span>
                <span>{teachBirth}</span>
                <span>{teachPhone}</span>
                <span>{teachAdress}</span>
                <span>{teachLicense}</span>
                <span>{teachAccount}</span>
            </div>
        </div>
    )
}