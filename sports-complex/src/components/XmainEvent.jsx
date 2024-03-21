import './XmainEvent.css'

import Submenu from './Submenu'
import XeventList from './XeventList'
import { useState } from 'react'
import XhomeBannerEventList from './XhomeBannerEventList'

export default function XmainEvent() {

    const [isChecked, setIsChecked] = useState([]);

    const insertMainPic = (eventCode, checked) => {
        if(checked) {
            setIsChecked([...isChecked, eventCode]);
        }else {
            setIsChecked(isChecked.filter(code => code !== eventCode ))
        }
    }



    return(
        <div className='XmainEvent_box'>
            <Submenu />
            <div className='XmainEvent_main'>
                < XeventList insertMainPic={insertMainPic} />
                <div className='XmainEvent_upload'>
                    <form action="post">
                        <input type="file" />
                        <input type="submit" value={'제출'} 
                        // onClick={'insertMainPic'} 
                        />
                    </form>
                </div>
                <XhomeBannerEventList />
                <div className='XmainEvent_delete' >
                    <button >삭제</button>
                </div>
            </div>
        </div>
    )
}