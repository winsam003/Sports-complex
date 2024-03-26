import './UserTypeAgree.css';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


export default function UserTypeAgree({ nextPage }) {
    // const navigate = useNavigate();

    // const handlePage = () => {
    //     navigate('/JoinPage2');
    // }

    const pageRouter = () => {
        switch (nextPage) {
            case 'JoinPage1':
                return '/JoinPage2';
            case 'JoinPage2':
                return '/JoinPage3';
            case 'JoinPage3':
                return '/JoinPage4';
            case 'JoinPage4':
                return '/LoginPage';
        }
    }

    return (

        <div className='UserTypeAgree_container'>
            <Link to={pageRouter()} className='UserTypeAgree_button UserTypeAgree_Agree'>동의합니다.</Link>
            <Link to="/" className='UserTypeAgree_button UserTypeAgree_Disagree'>동의하지 않습니다.</Link>
        </div>
    )
}