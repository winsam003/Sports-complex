import './PageBanner.css'

export default function PageBanner() {
    return (
        <div className='pagebanner'>
            <div className='pagebanner_img_div'>
                <img src='img/Arcana3.gif' className='pagebanner_img' />
            </div>
            <span>
                현재페이지위치<br></br>
            </span>
            <span>
                간단한페이지설명
            </span>
        </div >
    );
};