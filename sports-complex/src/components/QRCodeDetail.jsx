import './QRCodeDetail.css';

export default function QRCodeDetail(){

    const test = "https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=Hello%2C%20World%21";
    console.log(test.length);

    return(
        <div className="QRCodeDetail_Box">
            <div className='QRCodeDetail_QRCode'><img src='https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=Hello%2C%20World%21' alt='QRcode'/></div>
        </div>
    )
}