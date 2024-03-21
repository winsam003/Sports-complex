import './XmainEvent.css'

import Submenu from './Submenu'
import Xboard from './Xboard'
import { useState } from 'react'

export default function XmainEvent() {

    const[checkboxValue, setCheckboxValue] = useState(false);

    const checkboxChange = (value) => {
        setCheckboxValue(value);
    }

    return(
        <div className='XmainEvent_box'>
            <Submenu />
            <div className='XmainEvent_main'>
                < Xboard onCheckboxChange={checkboxChange} />
                <div className='XmainEvent_upload'>
                    <form action="post">
                        <input type="file" />
                        <input type="submit" value={'제출'} onClick={''} />
                    </form>
                </div>
            </div>
        </div>
    )
}