import { Fragment } from "react";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home"
export default function HomePage() {
    return (
        <Fragment>
            <Header/>
             <Body>
                 <Home></Home>
             </Body>
            <Footer/>
        </Fragment>
    );
}