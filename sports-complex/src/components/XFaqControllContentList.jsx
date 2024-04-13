import './XFaqControllContentList.css'
import XFaqControllContentListContents from './XFaqControllContentListContents'


export default function XFaqControllContentList({ noticeList, userDelete, checkedUsers }) {
    return (
        <div className='XFaqControllContentList_div'>
            <div className='XFaqControllContentList_div'>
                <div className='XFaqControllContentList_title'>
                    <p>선택</p>
                    <p>번호</p>
                    <p>제목</p>
                    <p>공지대상</p>
                    <p>작성일</p>
                    <p>작성자</p>
                    <p>조회수</p>
                </div>
                <div>
                    {noticeList.map((item, index) => (
                        <XFaqControllContentListContents key={index} userDelete={userDelete} isChecked={checkedUsers.includes(item.notnum)} {...item} />
                    ))}
                </div>
            </div>
        </div>
    )
}
