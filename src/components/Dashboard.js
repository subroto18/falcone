import { Fragment,useContext } from "react";
import AuthContext from "../context/contextApi";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const context = useContext(AuthContext);
    const navigate = useNavigate();
    const start = () => {
        context.refresh();
        navigate("/");
    }
    
    return (
        <Fragment>
            <div className="dashboard-div">
                <div className="welcome-title">
                    <h1>Welcome to falcone missing!</h1>
                    <div className="find-div py-2 text-center">
                        <button onClick={start} className="btn btn-primary">Start Mission!</button>
                    </div>
                </div>

            </div>
        </Fragment>
    );
}

export default Dashboard;