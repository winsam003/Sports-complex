import { useEffect, useState } from 'react'
import './XBtnResetDelete.css'
import axios from 'axios'

// 초기화 삭제 버튼
export default function XResetDeleteBtn({del}) {

    return (
        <div>
            <div className='XResetDeleteBtn'>
                <button>초기화</button>
                <button onClick={del}>삭제</button>
            </div>
        </div>
    )
}