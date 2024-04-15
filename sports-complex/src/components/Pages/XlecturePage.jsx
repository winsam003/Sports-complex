import PageBanner from "../PageBanner";
import XlectureInfo from "../XlectureInfo";
import { useState, useEffect } from 'react';

export default function XlecturePage() {
    const [selectedTeacher, setSelectedTeacher] = useState({
        teachnum: '',
        teachname: ''
    });

    const handleTeacherSelect = (teachnum, teachname) => {
        setSelectedTeacher({
            teachnum: teachnum,
            teachname: teachname
        });
    };
    return (
        <div>
            <PageBanner />
            <XlectureInfo onTeacherSelect={handleTeacherSelect} />
        </div>
    )
}