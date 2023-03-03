import { Fragment } from "react";
import Body from "../components/Body";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
import Header from "../components/Header";
export default function HomePage() {
    return (
        <Fragment>
            <Header/>
             <Body>
                <Dashboard/>
             </Body>
            <Footer/>
        </Fragment>
    );
}