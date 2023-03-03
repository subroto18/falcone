import { Fragment,useContext } from "react";
import Container from 'react-bootstrap/Container';
import SearchFalcone from "./SearchFalcone";
import ShowFalcone from "./ShowFalcone";
import AuthContext from "../context/contextApi";
function Home() {
    const context = useContext(AuthContext);
    let showFalconeAlert =  context.showFalcone.status;
    return (
        <Fragment>
            <section>
                <Container>
                    <div className="selection-div py-5 text-center">
                        <h2 className="text-light pt-5">Finding Falcone!</h2>
                        {showFalconeAlert!==undefined ? 
                              <ShowFalcone/>:
                              <SearchFalcone/>
                        }
                       
                  
                    </div>
                </Container>
            </section>
        </Fragment>
    );
}

export default Home;