import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div>
                <ul className="footer_ul">
                    <ol className="footer_ol">
                        <li className="footer_li">개인정보처리방침</li>
                        <li className="footer_li">영상정보처리운영방침</li>
                    </ol>
                    <ol className="footer_ol">
                        <li className="footer_li">이메일수집거부</li>
                        <li className="footer_li">찾아오시는길</li>
                    </ol>
                </ul>
            </div>

            <div className='company_info'>
                <img src='img/Arcana3.gif' />
            </div>

            <div className='consulting_telNum'>

            </div>


        </footer>
    );
};