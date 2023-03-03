import { Fragment } from "react";
import Container from "react-bootstrap/esm/Container";

function Body(props) {
    return (
        <Fragment>
            <div className="body">
                <Container>
                  {props.children}
                </Container>
            </div>
         
        </Fragment>
    );
}

export default Body;