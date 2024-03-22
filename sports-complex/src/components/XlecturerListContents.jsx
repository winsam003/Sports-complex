import './XlecturerListContents.css';

export default function XlectureListContents({ lectureNum, lectureName, lectureBirth, lecturePhone, lectureAddress, license, lectureDelete }){

    const handleDelete = (e) => {
        lectureDelete(lectureNum, e.target.checked);
    }


    return(
        <div className='XlectureListContents_Box'>
            <div className='XlectureListContents_contents'>
                <input type="checkbox" onChange={handleDelete} />
                <span>{lectureNum}</span>
                <span>{lectureName}</span>
                <span>{lectureBirth}</span>
                <span>{lecturePhone}</span>
                <span>{lectureAddress}</span>
                <span>{license}</span>
            </div>
        </div>
    )
}