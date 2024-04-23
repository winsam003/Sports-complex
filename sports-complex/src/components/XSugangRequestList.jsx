import './XSugangRequestList.css'
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { apiCall } from '../apiService/apiService';
import { API_BASE_URL } from './../apiService/app-config';

export default function XSugangRequestList({ classappnum, member, classappdate, classappstate, classes, payment, classAppStatusCounts, setClassAppStatusCounts, onToggleCheckbox, isChecked }) {
    // 체크박스
    const handleCheckboxChange = (e) => {
        onToggleCheckbox(classappnum);
    }

    // date를 연월일시분 형식으로 표현
    const appdate = new Date(classappdate).toLocaleString('ko-KR', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour12: false
    }).replace(/\./g, '.').slice(0, -1);

    // 가격 설정
    const formattedPrice = new Intl.NumberFormat('ko-KR').format(classes.clprice);

    return (
        <div>
            <div className='XSugangRequestList'>
                <div className='XSugangRequestList_content'>
                    <input type='checkbox' checked={isChecked} onChange={handleCheckboxChange}></input>
                    <p>{classappnum}</p>
                    <p>{member.id}</p>
                    <p>{appdate}</p>
                    <p>{classes.clnum}</p>
                    <p>{classes.clname}</p>
                    <p>{formattedPrice}</p>
                    <p>{classappstate}</p>
                    <p>{payment}</p>
                </div>
            </div>
        </div >
    )
}