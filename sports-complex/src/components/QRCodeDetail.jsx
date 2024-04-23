import './QRCodeDetail.css';

export default function QRCodeDetail(){
    const textData = 'winsam'; // QR 코드에 포함할 텍스트 데이터
    const encodedTextData = encodeURIComponent(textData); // URL 인코딩
    const url = `https://chart.googleapis.com/chart?choe=UTF-8&chs=150x150&cht=qr&chl=winsam`;




    return(
        <div className="QRCodeDetail_Box">
            <div className='QRCodeDetail_QRCode'>
                <img src="https://user-images.githubusercontent.com/81945553/218262306-6854afaa-4289-44fd-8c33-bc6c0cfbf476.png" alt="image" width="228" />
            </div>
        </div>
    )
}