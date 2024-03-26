import './XStaffList.css';
import XStaffdetail from './XStaffdetail';
import XBtnResetSearch from './XBtnResetSearch';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function XStaffList() {

    const [staff, setstaff] = useState([]);

    useEffect(() => {
        axios.get('/staff/staffList')
            .then((staff) => {
                console.log(`staff=${staff}`);
                setstaff(staff.data);
            }).catch((error) => {
                console.error(" 스태프 목록 불러오기 실패 ", error);
            });
    }, [])

    console.log(`staff =${staff}`);

    const staffdelete = (staffnum, checked) => {
        if (checked) {
            setstaff([...staff, staffnum]);
        } else {
            setstaff(staff.filter(num => num !== staffnum));
        }
    };

    return (
        <div className='XStaffList_Box'>
            <div className='XStaffList_searchTitle'>직원 검색</div>
            <div className='XStaffList_SearchBox'>
                <input type='text' name='XStaffListSearch' id='XStaffListSearch' placeholder='직원 검색' />
            </div>
            <XBtnResetSearch />
            <div>
                <div className='XStaffList_Searchstaff'>
                    <span>체크</span>
                    <span>ID</span>
                    <span>비밀번호</span>
                    <span>소속</span>
                    <span>직위</span>
                    <span>전화번호</span>
                    <span>이름</span>
                </div>
                <div>
                    {staff.map((item, index) => (
                        <XStaffdetail key={index} {...item} staffdelete={staffdelete} />
                    ))}
                </div>
            </div>
        </div>
    )
}