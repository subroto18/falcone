import { Fragment,useContext,useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import AuthContext from "../context/contextApi";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SearchFalcone() {
    const context = useContext(AuthContext);

    const selectedPlanet = (e) => {
        context.selectedPlanet(e);
    }


    const selectedVehicle = (nthVehicle, vehicleName) => {
       context.selectedVehicle(nthVehicle,vehicleName);
    }


    const findFalcone = () => {

        context.findFalcone();
    }


  
    let planets = context.planets;
    let vehicles = context.vehicles;
    let firstPlanet = context.firstPlanet;
    let secondPlanet = context.secondPlanet;
    let thirdPlanet = context.thirdPlanet;
    let fourPlanet = context.fourPlanet;
    let firstVehicle = context.firstVehicle;
    let secondVehicle = context.secondVehicle;
    let thirdVehicle = context.thirdVehicle;
    let fourVehicle = context.fourVehicle;
    let timeTaken = context.timeTaken;
    let loadingBtn = context.loadingBtn;

    let buttonApply = firstPlanet!=="" && context.secondPlanet!=="" && context.thirdPlanet!=="" && context.fourPlanet!=="" && context.firstVehicle!=="" & context.secondVehicle!=="" && context.thirdVehicle!=="" && context.fourVehicle!=="";



    return (
        <Fragment>

            <p>Select planets you want to search in:</p>

            <Row className="w-100  py-5">
                <Col lg={10} md={10} sm={12}>

                    <Row>
                        <Col ls={3} md={3} sm={6} xs={12} className="mb-3">
                            <FloatingLabel className="w-100" label="Destination 1">
                                <Form.Select value={firstPlanet} name="first" onChange={selectedPlanet} aria-label="Floating label select example">
                                    <option value="">Select</option>
                                    {planets.map((pd, index) => {
                                        return <option key={pd.name} value={pd.name}>{pd.name}</option>
                                    })}
                                </Form.Select>
                            </FloatingLabel>

                            {/* if planets is selected only than show vehicles */}

                            {firstPlanet !== "" &&
                                <div className="selected-vehicle-radio my-2">


                                    {vehicles.map(pd => {
                                        return <InputGroup key={pd.name} className="mb-2">
                                            <Form.Check onChange={() => selectedVehicle('first', pd.name)} value={pd.name} checked={firstVehicle === pd.name} name="radio1" type="radio" className="radio" />
                                            <Form.Check.Label className="radio-label"  >{pd.name}</Form.Check.Label>
                                        </InputGroup>
                                    })}

                                </div>
                            }

                        </Col>
                        <Col ls={3} md={3} sm={6} xs={12} className="mb-3">
                            <FloatingLabel className="w-100" label="Destination 2">
                                <Form.Select value={secondPlanet} name="second" onChange={selectedPlanet} aria-label="Floating label select example">
                                    <option value="">Select</option>
                                    {planets.map((pd, index) => {
                                        return <option key={pd.name} value={pd.name}>{pd.name}</option>
                                    })}
                                </Form.Select>
                            </FloatingLabel>

                            {/* if planets is selected only than show vehicles */}

                            {secondPlanet !== "" &&
                                <div className="selected-vehicle-radio my-2">


                                    {vehicles.map(pd => {
                                        return <InputGroup key={pd.name} className="mb-2">
                                            <Form.Check onChange={() => selectedVehicle('second', pd.name)} value={pd.name} checked={secondVehicle === pd.name} name="radio2" type="radio" className="radio" />
                                            <Form.Check.Label className="radio-label"  >{pd.name}</Form.Check.Label>
                                        </InputGroup>
                                    })}

                                </div>
                            }

                        </Col>
                        <Col ls={3} md={3} sm={6} xs={12} className="mb-3">

                            <FloatingLabel className="w-100" label="Destination 3">
                                <Form.Select value={thirdPlanet} name="third" onChange={selectedPlanet} aria-label="Floating label select example">
                                    <option value="">Select</option>
                                    {planets.map((pd, index) => {
                                        return <option key={pd.name} value={pd.name}>{pd.name}</option>
                                    })}
                                </Form.Select>
                            </FloatingLabel>

                            {/* if planets is selected only than show vehicles */}

                            {thirdPlanet !== "" &&
                                <div className="selected-vehicle-radio my-2">


                                    {vehicles.map(pd => {
                                        return <InputGroup key={pd.name} className="mb-2">
                                            <Form.Check onChange={() => selectedVehicle('third', pd.name)} value={pd.name} checked={thirdVehicle === pd.name} name="radio3" type="radio" className="radio" />
                                            <Form.Check.Label className="radio-label"  >{pd.name}</Form.Check.Label>
                                        </InputGroup>
                                    })}

                                </div>
                            }


                        </Col>
                        <Col ls={3} md={3} sm={6} xs={12} className="mb-3">


                            <FloatingLabel className="w-100" label="Destination 4">
                                <Form.Select value={fourPlanet} name="four" onChange={selectedPlanet} aria-label="Floating label select example">
                                    <option value="">Select</option>
                                    {planets.map((pd, index) => {
                                        return <option key={pd.name} value={pd.name}>{pd.name}</option>
                                    })}
                                </Form.Select>
                            </FloatingLabel>

                            {/* if planets is selected only than show vehicles */}

                            {fourPlanet !== "" &&
                                <div className="selected-vehicle-radio my-2">


                                    {vehicles.map(pd => {
                                        return <InputGroup key={pd.name} className="mb-2">
                                            <Form.Check onChange={() => selectedVehicle('four', pd.name)} value={pd.name} checked={fourVehicle === pd.name} name="radio4" type="radio" className="radio" />
                                            <Form.Check.Label className="radio-label"  >{pd.name}</Form.Check.Label>
                                        </InputGroup>
                                    })}

                                </div>
                            }

                        </Col>
                    </Row>
                </Col>
                <Col lg={2} md={2} sm={12}>
                    <div className="time-token-div">
                        <h6>Time token: {timeTaken}</h6>
                    </div>
                </Col>
            </Row>


            <div className="find-div py-5">
                {buttonApply ?  
                 <Fragment>
                     {loadingBtn ? 
                        <button class="btn btn-primary" type="button" disabled>
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Loading...
                        </button>
                         : 
                         <button onClick={findFalcone} className="btn btn-primary">Find Falcone!</button>
                    }
                 </Fragment>
                
                    :
                    <button disabled className="btn btn-primary">Find Falcone!</button>
                }

            </div>
        </Fragment>
    );
}

export default SearchFalcone;