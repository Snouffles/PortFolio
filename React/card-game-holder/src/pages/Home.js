
import { useNavigate } from "react-router-dom";
import Button from "../components/button/Button";

function Home() {

    const navigate = useNavigate();
    
    return(
        <>
            <h2>Un site pour vous aidez à tenir votre score lorsqu'il le stylo n'a plus d'encre!</h2>
            <div className="homeContainer">
                <div>Pas de jeu en particulier? <Button btnTitle={"Cliquez ici"} onClick={() => navigate("/basicCounter")} ></Button></div>
            </div>
        </>
    )
}

export default Home;