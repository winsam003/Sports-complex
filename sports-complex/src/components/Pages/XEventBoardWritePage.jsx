import { useLocation } from 'react-router';
import PageBanner from '../PageBanner';
import XEventBoardWriteContent from '../XEventBoardWriteContent';

// 이벤트 게시글 등록
export default function XEventBoardWritePage({getUserID}) {
    
    let detail;
    const location = useLocation();

    console.log(location.state)
    
    if(location.state !== null){
        detail = location.state.detail;
    } 
    
    console.log(`수정/등록 페이지 `, location);
    console.log('이벤트 상세 정보:detailState : ', detail);

    return (
        <div>
            <PageBanner />
            <XEventBoardWriteContent getUserID={getUserID} detail={detail} />
        </div>
    )
}