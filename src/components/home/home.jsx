import { useNavigate } from "react-router-dom";
import Spin from "../spin/spin";

const Home = () => {

    const navigate = useNavigate()

    const handleGoSpin = () => {
        navigate('/primer_spin')
    }

    return (
        <div>
            <h2>estas en Home</h2>
            <button onClick={handleGoSpin}>ir al spin</button>
        </div>
    )
}

export default Home;