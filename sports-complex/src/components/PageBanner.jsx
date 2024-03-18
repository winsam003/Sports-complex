import './PageBanner.css'

export default function PageBanner() {

    const PageInfo = [
    {
        "parameter": "",
        "Page" : "",
        "title" : ""
    },
    {
        "parameter": "JoinPage1",
        "Page": "회원가입",
        "title": "더 다양한 서비스를 이용하실 수 있습니다."
    },
    {
        "parameter": "JoinPage2",
        "Page": "회원가입",
        "title": "더 다양한 서비스를 이용하실 수 있습니다."
    },
    {
        "parameter": "JoinPage3",
        "Page": "회원가입",
        "title": "더 다양한 서비스를 이용하실 수 있습니다."
    },
    {
        "parameter": "JoinPage4",
        "Page": "회원가입",
        "title": "더 다양한 서비스를 이용하실 수 있습니다."
    },
    {
        "parameter": "LoginPage",
        "Page": "로그인",
        "title": "더 다양한 서비스를 이용하실 수 있습니다."
    },
    {
        "parameter": "FindPasswordPage",
        "Page": "비밀번호 찾기",
        "title": "더 다양한 서비스를 이용하실 수 있습니다."
    },
    {
        "parameter": "FindIDPage",
        "Page": "아이디 찾기",
        "title": "더 다양한 서비스를 이용하실 수 있습니다."
    },
    {
        "parameter": "FacilityInformationPage",
        "Page": "시설안내",
        "title": "시민과 함께하는 건강하고 행복한 삶"
    },
    {
        "parameter": "BoardPage",
        "Page": "공지사항",
        "title": "고객의 소리에 귀 기울여 발전하겠습니다."
    },
    {
        "parameter": "FrequentlyAskedPage",
        "Page": "자주하는 질문",
        "title": "고객의 소리에 귀 기울여 발전하겠습니다."
    },
    ]

    
    const currentPage = window.location.pathname.replace("/", "");
    let selectedPage = {
        Page: 'NotFound',
        title: '해당 페이지를 찾을 수 없습니다.'
    }

    const findCurrentPage = PageInfo.filter((page) => page.parameter === currentPage);
    selectedPage = findCurrentPage.length > 0 ? findCurrentPage[0] : selectedPage;

    console.log(currentPage);
    console.log(findCurrentPage);
    console.log(selectedPage);

    return (
        <div className='pagebanner'>
            <div className='pagebanner_img_div'>
                <div className='pagebanner_img' />
            </div>
            <span>
                {selectedPage.Page}<br></br>
            </span>
            <span>
                {selectedPage.title}
            </span>
        </div >
    );
};