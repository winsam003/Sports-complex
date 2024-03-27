import { useEffect, useState } from 'react'
import './XBtnResetDelete.css'
import axios from 'axios'

// 초기화 삭제 버튼
export default function XResetDeleteBtn({checkList}) {

    console.log(checkList);
    const [test, setTest] = useState();
    const del = () => {

        const formattedCheckList =
        {
            spaceCode: checkList
        }

        console.log(formattedCheckList);

        axios.post('/space/spacedelete', formattedCheckList)
            .then((ss) => {
                setTest(ss.data);
                console.log(`ss.data: ${ss.data}`);
            }).catch((error) => {
                console.log("Error: ",error);
            })
    }

    console.log(`테스트3wfeawsd${checkList}`);

    return (
        <div>
            <div className='XResetDeleteBtn'>
                <button>초기화</button>
                <button onClick={del}>삭제</button>
            </div>
        </div>
    )
}