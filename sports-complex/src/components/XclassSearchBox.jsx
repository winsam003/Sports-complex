import './XclassSearchBox.css';
import { useState } from 'react';
import XclassSearchButton from './XclassSearchButton';

export default function XclassSearchBox() {


    const [selectedOption, setSelectedOption] = useState('구기');

    const handlerOptionChange = (event) => {
        setSelectedOption(event.target.value);
        console.log(selectedOption);
    };


    return (
        <div className='XclassSearchBox_box'>
            <div className='XclassSearchBox_title'>강의정보</div>
            <div className='XclassSearchBox_division'>
                <span>대분류
                    <select value={selectedOption} onChange={handlerOptionChange} name="XclassSearchBox_MainCategory" id="XclassSearchBox_MainCategory">
                        <option value="구기">구기</option>
                        <option value="수상">수상</option>
                        <option value="댄스">댄스</option>
                        <option value="라켓">라켓</option>
                        <option value="웨이트">웨이트</option>
                    </select>
                </span>
                <span>세부종목
                    {selectedOption === '구기' && (
                        <select name="XclassSearchBox_SubCategory" id="XclassSearchBox_SubCategory">
                            <option value="구기">농구</option>
                            <option value="수상">야구</option>
                            <option value="댄스">풋살</option>
                        </select>
                    )}
                    {selectedOption === '수상' && (
                        <select name="XclassSearchBox_SubCategory" id="XclassSearchBox_SubCategory">
                            <option value="수영">수영</option>
                            <option value="다이빙">다이빙</option>
                        </select>
                    )}
                    {selectedOption === '댄스' && (
                        <select name="XclassSearchBox_SubCategory" id="XclassSearchBox_SubCategory">
                            <option value="k-pop">k-pop</option>
                            <option value="벨리댄스">벨리댄스</option>
                        </select>
                    )}
                    {selectedOption === '라켓' && (
                        <select name="XclassSearchBox_SubCategory" id="XclassSearchBox_SubCategory">
                            <option value="탁구">k-pop</option>
                            <option value="배드민턴">배드민턴</option>
                            <option value="테니스">테니스</option>
                            <option value="스쿼시">스쿼시</option>
                        </select>
                    )}
                    {selectedOption === '웨이트' && (
                        <select name="XclassSearchBox_SubCategory" id="XclassSearchBox_SubCategory">
                            <option value="클라이밍">클라이밍</option>
                            <option value="크로스핏">크로스핏</option>
                            <option value="필라테스">필라테스</option>
                        </select>
                    )}

                </span>
            </div>
            <div className='XclassSearchBox_inputBox'>
                <span>강좌명 </span>
                <input className='XclassSearchBox_input' type="text" placeholder='검색할 강의를 입력해주세요' />
            </div>
            <div className='XclassSearchBox_target'>
                <span>요일선택
                    <select name="XclassSearchBox_classday" id="XclassSearchBox_classday">
                        <option value="월">월</option>
                        <option value="화">화</option>
                        <option value="수">수</option>
                        <option value="목">목</option>
                        <option value="금">금</option>
                        <option value="토">토</option>
                    </select>
                </span>
                <span>교육대상
                    <select name="XclassSearchBox_MainCategory" id="XclassSearchBox_MainCategory">
                        <option value="성인">성인</option>
                        <option value="아동">아동</option>
                    </select>
                </span>
            </div>
            <XclassSearchButton />
        </div>
    )
}