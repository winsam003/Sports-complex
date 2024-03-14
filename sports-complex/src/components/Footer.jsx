import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className='footer_list'>
                <ul className='footer_ul'>
                    <ol className='footer_ol'>
                        <li className='footer_li'>개인정보처리방침</li>
                        <li className='footer_li'>영상정보처리운영방침</li>
                    </ol>
                    <ol className='footer_ol'>
                        <li className='footer_li'>이메일수집거부</li>
                        <li className='footer_li'>찾아오시는길</li>
                    </ol>
                </ul>
            </div>

            <div className='footer_company_info'>
                <img src='img/Arcana3.gif' className='footer_logo' />
                <p>
                    사업자등록번호 : 999 &#45; 99 &#45; 99999
                </p>
                <p>
                    우&#41; 99999 서울특별시 강남구 역삼로4길 승승장구빌딩 &#40;역삼동&#41; &#124; Tel &#58; 02 &#45; 999 &#45; 9999
                </p>
                <p>
                    Copyright&#169; 2024 칭찬해조엔지니어링 All Rights Reserved&#46;
                </p>
            </div>

            <div className='consulting_telNum'>
                <p>ㅇ</p>
            </div>

        </footer>
    );
};