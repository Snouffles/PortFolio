import Button from "../components/button/Button";

import {useNavigate} from "react-router-dom";




function MainNavigation() {
   
    let navigate = useNavigate();

    

    return(
        
        <header> 
            <h1>What's my score!?</h1>
            <nav>
                <ul>
                    <li><Button className={"btn__nav"} btnTitle={"Chicago"} onClick={() => navigate("/chicago")}/></li>
                    <li><Button className={"btn__nav"} btnTitle={"Home"} onClick={() => navigate("/")}/></li>
                </ul>
            </nav>
        </header>
        
    )

}

export default MainNavigation;