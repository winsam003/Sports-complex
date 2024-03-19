import './PasswordChange.css';
import Submenu from "./Submenu";
import PasswordChangeDetail from "./PasswordChangeDetail";

export default function PasswordChange(){
    return(
        <div className="PasswordChange_Box">
            <Submenu />
            <PasswordChangeDetail />
        </div>
    )
}