import { Fragment, useContext } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AuthContext from "../context/contextApi";
function ShowFalcone() {


    const reStart = () => {
      context.refresh()
    }

    const context = useContext(AuthContext);


    let showFalconeAlert = context.showFalcone.status;
    let showFalconePlanet = context.showFalcone.planet_name;
    let takenTime = context.timeTaken;

    console.log(showFalconeAlert, 'showFalconeAlert');
    return (
        <Fragment>

            <Row className="w-100 text-center py-5">
                <Col lg={12} md={12} sm={12}>

                    {showFalconeAlert=='success' ?

                        <Fragment>
                            <p className="alert alert-success">Success! Congratulations on Finding Falcone. King Shan is mighty pleased.</p>
                            <h6>Time taken : {takenTime}</h6>
                            <h6>Planet found: {showFalconePlanet}</h6>
                        </Fragment>
                        :
                        <Fragment>
                            <p className="alert alert-danger">Unsuccessful! Sorry missing is failed.</p>
                        </Fragment>
                    }



                </Col>

            </Row>

            <div className="find-div py-5">
                <button className="btn btn-primary" onClick={reStart}>Start Again!</button>
            </div>
        </Fragment>
    );
}

export default ShowFalcone;