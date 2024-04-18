import './PlaceRentalInfoContent.css'
import Submenu from './Submenu'
import { Link, useNavigate } from 'react-router-dom';

// 수강 신청
export default function PlaceRentalInfoContent({ roleList }) {

    let getUserID = null;
    if(sessionStorage.getItem('userData') !== null){
        getUserID = JSON.parse(sessionStorage.getItem('userData')).stfid;
    }


    const navigate = useNavigate();
    const checkRole = () => {
        if (getUserID){
            alert("유저 아이디로만 허가 신청이 가능합니다.");
        }else if (roleList && roleList.some(item => item === "USER")){
            navigate("/PlaceRental");
        }else{
            alert("로그인 후 이용해주세요.");
            navigate("/LoginPage");
        }
    }

    return (
        <div className='board_div'>
            <Submenu />
            <div className='board_div_div'>
                <div>
                    <div className='RentalInfoSearchButton_OK_div'>
                        <span className='TermsAndConditions_subtitle'>사용허가절차 & 신청</span>
                        <div className='RentalInfoSearchButton_scrollbox'>
                            <span className='RentalInfoSearchButton_title'> 사용허가절차 </span>
                            <pre>
                                단체이용시설은 사전에 단체등록을 접수해야 함<br></br>
                                단체등록시 필요한 서류: 단체명, 회원명단, 단체 대표자의 연락처 및 주소<br></br>
                                단체별로 하나의 ID 부여, 단체 대표자만 경기장 예약 가능
                            </pre>
                            <span className='RentalInfoSearchButton_title'> 우선 순위 </span>
                            <ul className="RentalInfoSearchButton_ul">
                                <li>
                                    <span>국가&#183;도 또는</span>
                                    <span>시의 행사</span>
                                </li>
                                <li>
                                    <span>시에서 인정한</span>
                                    <span>체육협회 및 단체</span>
                                </li>
                                <li>
                                    <span>65세 이상의</span>
                                    <span>고령자 단체</span>
                                </li>
                                <li>
                                    <span>직장 및 동호인</span>
                                    <span>단체</span>
                                </li>
                            </ul>
                            <span className='RentalInfoSearchButton_title'> 이용 절차 </span>
                            <pre>
                                01 홈페이지 예약신청 : 홈페이지(http://res.isdc.co.kr/)로그인(실명인증)후, 사용허가 신청<br></br>
                                02 사용허가심의 : 담당자의 사용허가 심의<br></br>
                                03 허가통보 : 심의 후, 허가통보(SMS 발송 및 담당자와 통화)<br></br>
                                04 전용사용료납부 : 시설 이용료 결제(홈페이지에서 결제-카드 & 계좌이체)<br></br>
                                05 부속시설사용허가 : 행사 종료 이후, 부속시설 사용료를 정산하여 담당자가 통보<br></br>
                                06 부속사용료납부 : 담당자통보 후,3일 이내에 부속시설 사용료 납부(시설 이용료 결제 방법과 동일)<br></br>
                            </pre>
                        </div>
                    </div>
                    <div className='RentalInfoSearchButton_Conditions_div'>
                        <span className='TermsAndConditions_subtitle'>조례 및 조건사항</span>
                        <div className='RentalInfoSearchButton_scrollbox'>
                            <pre>
                                제1조 (목적)<br></br>
                                이 조례는 성남시 체육시설 관리 및 운영에 관하여 필요한 사항을 규정함을 목적으로 한다.<br></br>
                                제2조 (정의)<br></br>
                                이 조례에서 사용하는 용어의 정의는 다음 각호와 같다.<br></br>
                                1. "성남시 체육시설(이하 "체육시설"이라 한다)"이란 이 조례에 따라 운영하는 성남시(이하“시”라고 한다)에서 건립한 체육시설을 말하며<br></br> “부속시설”이란 그에 부속된 필요한 설비 또는 비품을 말한다.<br></br>
                                2. “시설의 사용”이란 제1호의 체육시설을 방송(텔레비젼 포함), 광고 게시, 공연, 전람 등 그 밖의 목적으로 사용 또는 이용하는 행위를 말한다.<br></br>
                                3. "전용사용"이란 체육시설의 전체 또는 일부를 일정기간(시간) 동안 사용하는 것을 말하며 "전용사용료"란 전용사용자가 납부하는 요금을<br></br> 말한다.<br></br>
                                4. "이용사용"이란 개인연습, 경기연습, 체력단련 등을 목적으로 체육시설을 이용하는 것을 말하며 "이용사용료"란 이용사용자가 납부하는<br></br> 요금을 말한다.<br></br>
                                5. "단체"란 동일목적으로 특정단체 또는 그 구성원인 인솔자를 따라 20명 이상 동시 입장하는 일행을 말한다.<br></br>
                                6. "회원제"란 1개월 이상 계속하여 체육시설을 정기적으로 이용하는 제도를 말한다.<br></br>
                                7. "어린이"란 초등학교 학생과 만7세 이상 만12세 이하의 사람을 말한다.<br></br>
                                8. "청소년"이란 만13세 이상 만18세 이하인 사람을 말한다.<br></br>
                                9. "군경"이란 하사 이하의 군인과 전투경찰대 및 경비교도대의 대원을 말한다.<br></br>
                                제3조 (사용허가)<br></br>
                                ①체육시설을 사용하고자 하는 사람은 성남시장(이하 “시장” 이라 한다) 사용허가를 받아야 한다. 허가내용을 변경하고자 할 때도 같다.<br></br>
                                ②체육시설을 전용으로 사용하고자 하는 사람은 사용자의 주소, 성명, 사용할 시설, 사용목적, 사용기간 및 시간, 징수하려는 관람료액을<br></br> 명시하여 신청하여야 하며 사용기간을 초과하여 사용할 때도 허가를 받아야 한다.<br></br>
                                ③개인이 이용사용 하고자 할 때는 사용료를 납부하고 이용사용권을 교부받음으로써 허가에 갈음한다.<br></br>
                                제4조 (사용허가의 우선순위)시장은 체육시설을 사용하고자 하는 사람이 2명 이상일 때에는 다음 각 호의 순서에 따라 허가한다.<br></br>
                                1. 국가·도 또는 시의 행사<br></br>
                                2. 체육진흥을 위하여 성남시 체육회, 성남시 장애인체육회 및 성남시 생활체육회에서 주최·주관하는 각종 경기 대회·행사<br></br>
                                3. 직장 및 동호인 등 다수인이 참여하는 행사<br></br>
                                4. 경기연습, 개인연습, 체력단련 등의 체육활동<br></br>
                                5. 체육활동 이외의 문화행사, 공연, 전람, 전시 등 행사<br></br>
                                6. 그 밖의 행사 또는 활동<br></br>
                                제5조 (시설의 개방)<br></br>
                                ①체육시설은 특별한 사유가 없는 한 주민 건강증진을 위한 체육활동장으로 개방하여야 하며, 관리비 부족 등의 사유로 개방을 제한할 수 없다.<br></br>
                                ②시장은 개방하고자 하는 체육시설에 각 시설별로 상설 스포츠 교실을 설치·운영할 수 있으며 연간, 월간, 일간, 주민이용계획을 수립하여<br></br> 매월 다음 각 호의 사항을 지역주민에게 고지하여야 한다.<br></br>
                                1. 개방시설별 이용기간 및 시간, 이용 수칙 등<br></br>
                                2. 상설 스포츠교실의 종류 및 이용방법<br></br>
                                3. 시설 종류별 사용료, 무료시설의 범위 및 이용방법<br></br>
                                ③시장은 개방하고자 하는 체육시설에 주민이 이용할 수 있는 기본적인 운동기구를 배치하여야 하며 제2항의 각 호 내용을 주민이 쉽게볼<br></br> 수 있는 장소에 게시하여야 한다.<br></br>
                                ④시장은 소관 체육시설의 활용실태를 매 분기별로 점검하고 활용도 제고를 위한 주민 홍보 등 필요한 조치를 하여야 한다.<br></br>
                                ⑤시장은 개방계획 수립 시 각종 경기대회, 행사 및 시설의 보수, 휴무일 등을 고려하여 신축성 있게 이용계획을 수립하여야 한다.<br></br>
                                제6조 (개방제한)시장은 다음 각 호의 개방제한 사유가 있는 때에는 그 사유 및 기간 등을 지체없이 고지하여야 한다.<br></br>
                                1. 국가, 지방자치단체의 특별한 행사<br></br>
                                2. 시설의 개보수<br></br>
                                3. 시설의 이용시 현저한 위험이 예상될 때<br></br>
                                4. 기타 시장이 필요하다고 인정하는 경우<br></br>
                                제7조 (사용제한)시장은 다음 각 호의 어느 하나에 해당할 때에는 체육시설 사용을 허가하지 아니한다.<br></br>
                                1. 공공질서와 선량한 풍속을 해할 우려가 있다고 인정될 때<br></br>
                                2. 시설의 관리 및 보호상 지장이 있다고 인정될 때<br></br>
                                3. 공익상 부적당하다고 인정될 때<br></br>
                                4. 사용료 미납이 있을 때<br></br>
                                5. 그 밖에 시장이 필요하다고 인정할 때<br></br>
                                제8조 (입장의 거절 및 퇴장)시장은 다음 각 호의 어느 하나에 해당하는 사람은 입장을 거절하거나 이미 입장한 사람에게 대하여는 퇴장을<br></br> 명하는 등 필요한 조치를 할 수 있다.<br></br>
                                1. 타인에게 유해한 행위를 하거나 위험을 미치게 하거나 방해 될 물품을 휴대한 사람<br></br>
                                2. 행사에 지장을 초래하는 행위를 한 전례가 있는 사람<br></br>
                                3. 체육시설 내의 질서를 문란하게 하거나 문란하게 할 우려가 있는 사람<br></br>
                                제9조 (사용료)<br></br>
                                ① 체육시설의 사용료는 전용사용, 이용사용, 중계방송, 상업 사용 및 부속시설 사용 등으로 구분하며 별표 1부터 별표 5까지와 같다.<br></br> 다만, 위탁관리 하는 체육시설의 사용료는 수탁기관이 시장의 승인을 얻어 따로 정할 수 있다.<br></br>
                                ②시장은 체육시설의 상시 이용자를 위하여 회원제로 운영할 수 있으며, 이 경우 단체 또는 강습프로그램에 관한 회원모집 및 회원권을<br></br> 발행하여 이용사용료를 부과·징수할 수 있다.<br></br>
                                ③사용료의 납부방법은 제1항의 사용구분에 따라 사용허가를 신청할 때 납부하여야 한다. 다만, 이용사용권은 미리 구입하여야 한다.<br></br>
                                ④부속시설 사용료는 행사종료 후 3일 이내에 정산하여 납부하여야 한다. 다만, 연중 계속적으로 이용·사용하는 사람은 매월 10일 이내에<br></br> 전월분을 정산하여 납부하여야 한다.<br></br>
                                제10조 (관람수입에 의한 사용료 징수)<br></br>
                                ① 전용사용자가 관람권을 발행하는 경우에는 허가사용료 외에 다음 각 호에 해당하는 사용료를 징수한다. 다만, 관람수입 금액의 총액이<br></br> 전용사용료에 미달될 때에는 그러하지 아니하다.<br></br>
                                1. 관람수입 총액의 100분의 5 : 성남시체육회 등에서 주관 또는 주최로 유치한 전국단위 이상 공식경기<br></br>
                                2. 관람수입 총액의 100분의 10 : 체육행사·공공행사·문화예술행사 및 대한 체육회와 그 산하 단체가 주최·주관하는 비영리 목적의 경기<br></br>
                                3. 관람수입 총액의 100분의 15 : 프로경기 등을 포함한 일반행사<br></br>
                                ②관람권을 발행하고자 할 때에는 관람료를 명시하여 발행하여야 한다.<br></br>
                                ③제1항에 따른 관람료는 사전에 시장의 승인을 얻어야 한다.<br></br>
                                ④관람권을 발행하는 경우에는 승인된 금액의 100분의 10에 해당하는 예치금을 승인과 동시에 선납하고 행사종료 후 3일 이내에 정산한다.<br></br> 연중 계속적인 행사의 경우 정한 날짜에 관하여는 제10조제4항 단서를 준용한다.<br></br>
                                ⑤제4항에 따른 예치금은 보증보험증권으로 대체할 수 있다.<br></br>
                                ⑥초대권 발행은 총 관람권의 발행 매수의 10퍼센트 이내로 하고 10퍼센트 초과매수는 일반권으로 본다.<br></br>
                                제11조 (초과사용료 등)사용자가 사용허가시간을 초과하여 체육시설 및 부속시설을 사용할 때에는 다음 각 호의 초과사용료를 납부하여야<br></br> 한다. 이 경우 초과사용시간이 1시간 미만일 때는 1시간으로 본다.<br></br>
                                1. 전용사용시 : 초과 시간당 당해시설 사용료의 2할 가산<br></br>
                                2. 이용사용시 : 초과 시간당 당해시설 사용료의 2할 가산<br></br>
                                제12조 (사용료의 감면)시장은 다음 각호에 해당할 때에는 사용료를 감면할 수 있다.<br></br>
                                1. 전액 감면<br></br>
                                가. 국가, 도 또는 시의 경기·행사<br></br>
                                나. 전국(전국소년)체육대회 및 경기도 체육대회 출전선수 훈련<br></br>
                                다. 도·시 대표선수단의 강화 훈련<br></br>
                                라. 시청 직장 운동경기부 선수 훈련<br></br>
                                마. 초·중·고등학교 선수 중 성남시 대표선수단 및 성남시체육회장이 추천하는 선수의 훈련<br></br>
                                바. 성남시체육회 가맹단체 및 성남시생활체육회에 등록된 단체의 시장(구청장), 시의회 의장, 시 생활체육회장, 협회장(연합회장)기 대회<br></br>(연 1회)
                                사. 도 및 시(또는 소속체육회)에서 주관하는 저소득 한부모가족, 국민기초생활보장수급자, 보훈대상자, 장애인, 어린이, 경로자,<br></br> 군인을 대상으로 하는 경기·행사<br></br>
                                아. 시 체육회 가맹단체, 시 생활체육회에서 주최하는 전국단위 대회<br></br>
                                2. 100분의 50감면<br></br>
                                가. 「국가유공자 등 예우 및 지원에 관한 법률」에 의한 국가유공자 단체 경기·행사<br></br>
                                나. 「장애인복지법」에 따른 장애인 단체 경기·행사(다만, 판매 등 영리목적 행사의 경우에는 제외한다.)<br></br>
                                다. 65세 이상 노인 단체 경기·행사<br></br>
                                3. 100분의 30감면<br></br>
                                가. 세계타이틀전이나 아시아 또는 세계적 규모의 경기<br></br>
                                나. 국위선양과 체육진흥을 위한 경기·행사<br></br>
                                다. 시가 후원하는 체육단체의 비영리 목적의 경기<br></br>
                                라. 민속제나 고유민속의 보급발전을 위한 행사<br></br>
                                마. 청소년 육성을 위하여 학교 또는 청소년 단체에서 주관하는 경기·행사<br></br>
                                4. 100분의 10 감면<br></br>
                                가. 12세 이상 55세 이하 여성의 수영장 월 이용료<br></br>
                                ①제1항 각 호 외에 공익 또는 시정의 효율적인 운영을 위하여 시장이 필요하다고 인정하는 경기·행사의 경우 사용료 감면에 대해서는<br></br> 규칙으로 정한다.<br></br>
                                ②제11조제6항에 따라 발행한 관람권 매수 10퍼센트 이내의 초대권에 대하여는 사용료를 면제한다.<br></br>
                                제13조 (사용료의 반환)<br></br>
                                ①제10조에 따라 납부한 사용료 등은 다음 각 호의 경우를 제외하고는 반환하지 아니한다.<br></br>
                                1. 전용사용, 상업사용 또는 부속시설의 사용허가를 받은 사람이 그 허가를 반납 또는 연기하는 경우<br></br>
                                가. 사용개시 30일 전까지 : 전액<br></br>
                                나. 사용개시 20일 전까지 : 100분의 80<br></br>
                                다. 사용개시 10일 전까지 : 100분의 50<br></br>
                                라. 사용개시 전일까지 : 100분의 20<br></br>
                                2. 체육시설의 유지관리에 지장이 있다고 인정되어 일시 정지된 경기 및 행사로서 정지된 시일만큼 연장할 수 없을 때 정지 시일에 해당하는<br></br> 사용료 전액<br></br>
                                3. 중계방송을 위한 사용료 납부 후 전혀 방송되지 아니한 경기 및 행사에 대하여 사용료 전액<br></br>
                                4. 천재지변과 우천 등 기상상황으로 사용이 불가능하여 사용자가 사전에 허가반납 요청을 할 때와 시의 긴박한 사정으로 사용의 취소를<br></br> 한 때에는 사용료 전액<br></br>
                                5. 사용 중 우천 등의 부득이한 사유로 사용이 중지될 경우 중지된 시점이 허가를 받은 시간의 50% 미만일 경우 사용료 전액<br></br>
                                ②입장권은 미사용을 이유로 환불하지 아니한다. 다만, 전용사용자의 귀책사유로 경기 및 행사가 중단된 경우에는 전용사용자는 그 관람료를<br></br> 반환하여야 한다.<br></br>
                                ③제1항 및 제2항 이 외의 사용료 반환에 관한 사항은 공정거래위원회에서 정한 「소비자분쟁해결기준」을 준용한다.<br></br>
                                ④사용료 반환은 사용허가를 받은 사람이 신청하여야 한다.<br></br>
                                제14조 (입장권)<br></br>
                                ①시장은 관람권을 발행하지 아니하는 행사·경기를 관람하거나 행사·경기의 관람이 아닌 관광 등의 목적으로 입장하는 때에는 입장권을<br></br> 발행할 수 있다. 다만, 다음 각 호의 어느 하나에 해당할 때에는 입장권 없이 입장할 수 있다.<br></br>
                                1. 국가 또는 도·시의 행사에 참석하는 사람<br></br>
                                2. 경기·행사의 주최측 담당 임원, 출전선수, 신문·통신·방송사의 출입기자<br></br>
                                3. 보호자가 있는 만6세 이하의 어린이<br></br>
                                4. 각급 학교체육대회 개최 시 해당학교 교사와 학생 및 전국체전, 국제경기 또는 국내주요 경기에 대하여 응원단으로 동원되는 인원<br></br>
                                5. 그 밖에 시장이 발행하는 출입증을 소지하거나 공익상 또는 시책상 시장이 필요하다고 인정하는 경우
                                ②제1항의 입장료는 500원 이상으로<br></br> 한다. 다만, 다음 각 호의 어느 하나에 해당하는 사람은 200원으로 한다.<br></br>
                                1. 만12세 이하인 사람, 만 65세 이상의 사람으로서 주민등록증(주민등록증이 없는 경우에는 관공서 또는 공공기관이 발행한 증명서로서<br></br> 사진이 첨부되어 본인임을 확인할 수 있는 여권ㆍ운전면허증 등)을 휴대한 사람, 「장애인복지법」에 따른 장애인, 「국가유공자 등 예우 및<br></br> 지원에 관한 법률」에 따른 국가유공자, 그 밖에 관련법에 따른 유공자<br></br>
                                2. 행사ㆍ경기의 관람이 아닌 관광 등을 위하여 20명 이상의 사람이 단체입장 하는 경우<br></br>
                                제15조 (사용허가 취소 및 정지)<br></br>
                                ①시장은 다음 각 호의 어느 하나에 해당하는 때에는 사용허가를 취소할 수 있다.<br></br>
                                1. 사용허가 이외의 목적으로 사용하거나 사용할 우려가 있을 때<br></br>
                                2. 사용허가의 조건을 위반하여 체육시설을 사용할 때<br></br>
                                3. 사용료를 납부하지 아니한 때<br></br>
                                ②시장은 다음 각 호의 어느 하나에 해당하는 때에는 그 사용을 일시 정지할 수 있다.<br></br>
                                1. 체육시설의 안전관리상 필요하다고 인정하는 때<br></br>
                                2. 체육시설내 질서유지가 심히 어려울 때<br></br>
                                제16조 (사용자의 부대시설)<br></br>
                                ①사용자가 사용기간 중 필요한 설비를 설치할 때에는 시장의 승인을 얻어 설치할 수 있다.<br></br>
                                ② 사용자는 사용기간 종료와 동시에 이를 철거하고 원상회복하여야 한다.<br></br>
                                제17조 (양도의 금지)이 조례에 따라서 전용사용허가를 받은 사람은 시장의 동의를 얻지 아니하고는 그 지위를 양도하거나 빌려줄 수 없다.<br></br>
                                제18조 (사용자 책임)<br></br>
                                ①사용자가 시설물 등을 사용하는 동안에 그 사용과 관련하여 시설물 등을 파손·망실·구조변경 등을 함으로써 체육시설 및 부대시설에 손해가<br></br> 발생한 때에는 원상회복 하거나 그 손해를 즉시 배상하여야 한다.
                                ②사용자는 사용과 관련하여 발생하는 폐기물 등을 수거하여야 한다.<br></br>
                                ③시장은 제1항 및 제2항에 따라 사용자의 의무를 담보하기 위하여 체육시설의 사용을 허가하는 때에는 시설물 등의 원상복구를 위한<br></br> 비용이나 폐기물 등의 수거에 필요한 비용을 사전에 예치하게 하거나 청소용역업체 등과의 용역계약서를 제출하게 하는 등 필요한 조치를<br></br> 할 수 있다.<br></br>
                                ④ 사용자는 자신의 행위 또는 자신이 주관하는 행사 및 경기로 인하여 발생한 사고에 대하여 모든 책임을 진다.<br></br>
                                제19조 (사회체육지도자의 배치)시장은 체육시설의 사용 및 이용자에 대한 경기규칙 및 체육활동 전반에 대한 지도를 위하여<br></br> 사회체육지도자를 배치할 수 있다.<br></br>
                                제20조 (체육시설의 관리)시장은 체육시설의 효율적인 관리 및 운영에 필요한 예산을 확보하여야 하며, 체육시설의 종류별 규모에 적정한<br></br> 전문관리인을 확보, 배치하여 주민 이용에 불편이 없도록 하여야 한다.<br></br>
                                제21조 (매표 및 검인)<br></br>
                                ①관람권, 입장권은 지정장소에서 판매한다. 다만, 관람권을 예매하는 경우에는 그러하지 아니하다.<br></br>
                                ②모든 관람권, 초대권(초대장), 임원증, 선수증 등은 사전에 시장 또는 수탁기관의 검인을 받아야 한다.<br></br>
                                제22조 (시설의 사용수익 허가)<br></br>
                                ①시장은 체육활동에 지장이 없는 범위에서 체육시설의 전부 또는 일부를 일정기간 유상 또는 무상으로 사용수익허가를 할 수 있다.<br></br>
                                ②제1항에 따라 사용수익허가를 하는 때에는 사용료산정 등에 관하여는 「공유재산 및 물품관리법」 및 「성남시 공유재산 관리 조례」에 <br></br>따르며, 전기 및 상·하수도·청소요금 등 부대사용료는 별도 징수하여야 한다.<br></br>
                                제23조 (위탁관리)<br></br>
                                ①시장은 체육시설의 효율적인 관리 및 활용이 필요하다고 인정할 때에는 지역 사회 체육의 활성화에 이바지할 수 있는 체육단체,<br></br> 생활체육단체, 성남도시개발공사에 체육시설의 운영을 위탁할 수 있다.<br></br>
                                ②제1항에 따라 체육단체 및 생활체육단체에게 위탁하고자 할 때에는 「성남시 사무의 민간위탁 촉진 및 관리 조례」를 준용한다.<br></br>
                                ③제1항에 따라 위탁관리·운영하고자 할 때에는 관리책임, 위탁기간, 그 밖의 관리운영에 관한 필요한 사항에 대하여 계약을 체결하고<br></br> 계약내용은 공증을 하여야 한다.<br></br>
                                ④제2항의 위탁기간은 3년 이내로 한다. 다만, 시장이 필요하다고 인정할 때에는 그 기간을 연장할 수 있다.<br></br>
                                ⑤수탁사무의 처리에 관한 책임은 수탁기관에 있으며 권한을 행사함에 있어서는 수탁기관의 명의로 한다.<br></br>
                                ⑥시장은 시설관리 및 운영상 필요한 경우 위탁관리에 소요되는 경비의 일부를 예산의 범위에서 지원할 수 있다.<br></br>
                                제24조 (위탁계약의 해제등)시장은 다음 각 호의 어느 하나에 해당할 때에는 계약을 해제 또는 해지할 수 있다.<br></br>
                                1. 수탁기관이 계약사항을 위반하였을 때<br></br>
                                2. 수탁시설의 유지관리를 소홀히 하거나 시설 또는 용도를 임의로 변경한 경우<br></br>
                                3. 제26조에 따른 시정요구 등을 이행하지 않는 경우<br></br>
                                4. 재해 등 불가피한 사유로 경기장을 사용할 수 없게 된 때<br></br>
                                5. 그 밖에 국가 또는 도ㆍ시의 시책과 체육시설 관리상 필요하다고 인정될 때<br></br>
                                제25조 (지휘·감독)<br></br>
                                ①시장은 수탁기관으로 하여금 관리운영에 관한 사항을 연 1회 보고하게 하며, 필요한 경우 관리·운영에 관한 사항을 검사하거나<br></br> 조사할 수 있다.<br></br>
                                ②시장은 제1항에 따른 검사 및 조사 결과, 위법 또는 부당하다고 인정될 때에는 그 처분을 취소하거나 또는 정지시킬 수 있으며 시정을 요하는<br></br> 사항이 있을 경우 수탁기관에게 필요한 조치를 명할 수 있다.<br></br>
                                ③수탁기관은 제1항의 검사 및 조사에 성실히 응하여야 하며, 제2항에 따른 조치·시정요구을 이행하여야 한다.<br></br>
                                제26조 (체육관련 단체의 지원)시장은 체육단체의 육성 및 발전을 위하여 체육시설의 일부를 성남시체육회와 성남시생활체육회 사무국 또는<br></br> 가맹경기단체의 사무실로 활용하게 할 수 있다.<br></br>
                                제27조 (시행규칙)이 조례 시행에 필요한 사항은 규칙으로 정한다.<br></br>
                                부 칙 &lt;제정 1990.05.03 조례 제1045호&gt;<br></br>
                                ①&lt;시행일&gt; 이 조례는 공포한 날로부터 시행한다.<br></br>
                                ②&lt;폐지조례&gt; 성남시종합운동장시설에대한사용료징수조례는 이 조례시행과 동시에 폐지한다.<br></br>
                                ③&lt;경과조치&gt; 이 조례 시행 이전에 종합운동장 사용허가 신청서는 이 조례에 의한 것으로 본다.<br></br>
                                부 칙 &lt;개정 1996.03.23 조례 제1417호&gt; 이 조례는 공포한 날부터 시행한다.<br></br>
                                부 칙 &lt;개정 1997.09.29 조례 제1502호&gt; 이 조례는 공포한 날부터 시행한다.<br></br>
                                부 칙 &lt;개정 2000.03.15 조례 제1675호&gt; 이 조례는 공포한 날부터 시행한다.<br></br>
                                부 칙 &lt;개정 2002.01.04 조례 제1806호&gt; 이 조례는 공포한 날부터 시행한다.<br></br>
                                부 칙 &lt;개정 2003.05.22 조례 제1853호&gt; 이 조례는 공포한 날부터 시행한다.<br></br>
                                부 칙 &lt;개정 2005.01.10 조례 제1958호&gt; 이 조례는 공포한 날부터 시행한다.<br></br>
                                부 칙 &lt;개정 2008.03.14 조례 제2201호&gt;<br></br>
                                ①&lt;시행일&gt; 이 조례는 공포한 날로부터 시행한다.<br></br>
                                ②&lt;사용허가 및 사용료에 관한 경과조치&gt; 이 조례 시행전에 종전의 규정에 의하여 사용허가를 받았거나 사용허가를 신청한 것에 대한<br></br> 사용료의 부과·징수는 종전의 규정에 의한다.<br></br>
                                ③&lt;위탁에 관한 경과조치&gt; 이 조례 시행전에 종전의 규정에 의하여 행한 허가·처분 등은 종전의 규정에 의한다.<br></br>
                                ③&lt;일반적 경과조치&gt; 이 조례 시행전에 종전의 규정에 의하여 행한 허가·처분 등은 종전의 규정에 의한다.<br></br>
                                부 칙(개정 2009. 10. 05 조례 제2366호)<br></br>
                                ①이 조례는 공포한 날부터 시행한다.<br></br>
                                ②(사용허가 및 사용료에 대한 경과조치)이 조례 시행전에 종전의 규정의 의하여 사용허가를 받았거나 사용허가를 신청한 것에 대한 사용료의<br></br> 부과징수는 종전의 규정에 의한다.<br></br>
                                부 칙(개정 2011. 03. 21 조례 제2474호)<br></br>
                                ①(시행일) 이 조례는 공포한 날부터 시행한다.<br></br>
                                ②(사용허가 및 사용료에 관한 경과조치) 이 조례 시행전에 종전의 규정에 의하여 사용허가를 받았거나 사용허가를 신청한 것에 대하여는<br></br> 종전의 규정에 의한다.<br></br> 다만, 종전의 규정이 개정규정에 비하여 이용자에게 불리한 경우에는 개정규정에 의한다.<br></br>
                                부 칙 &lt;개정 2012. 03. 12 조례 제2545호&gt; 이 조례는 공포한 날부터 시행한다.<br></br>
                                부 칙 &lt;개정 2013.12.09 조례제2771호&gt;<br></br>
                                ①(시행일) 이 조례는 공포한 날부터 시행한다.<br></br>
                                ②(사용허가 및 사용료에 관한 경과조치) 이 조례 시행전에 종전의 규정에 의하여 사용허가를 받았거나 사용허가를 신청한 것에 대한 사용료의<br></br> 부과징수는 종전의 규정에 따른다.<br></br>
                                부 칙 &lt;개정 2014.03.24 조례 제2782호 성남시 시설관리공단 설립 및 운영에 관한 조례 폐지조례&gt;<br></br>
                                제1조 (시행일) 이 조례는 공포한 날부터 시행한다.<br></br>
                                제2조 (다른 조례의 개정)<br></br>
                                ① ~ ② &lt;생략<br></br>
                                ③「성남시 체육시설 관리 운영 조례」제24조제1항 중 “성남시 시설관리공단”을 “성남도시개발공사”로 한다.<br></br>
                                ④ ~ ⑨ &lt;생략&gt;<br></br>
                                부 칙 &lt;일부개정 2015.10.12. 조례 제2922호&gt;<br></br>
                                제1조(시행일) 이 조례는 공포한 날부터 시행한다.<br></br>
                                제2조(사용허가 및 사용료에 관한 경과조치) 이 조례 시행 전에 종전의 규정에 따라서 사용허가를 받았거나 사용허가를 신청한 것에 대한<br></br> 사용료의 부과징수는 종전의 규정에 따른다.
                            </pre>
                        </div>
                    </div>
                </div>
                <div className='RentalInfoSearchButton'>
                    <button>신청서 다운로드</button>
                    <button onClick={checkRole}>사용허가신청</button>
                </div>
            </div>
        </div >
    )
}