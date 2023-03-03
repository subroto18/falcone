import React, { useState, useEffect } from 'react';
import backendApi from "../conf"
import axois from "axios"
const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

export const AuthProvider = (props) => {

    const [response, setResponse] = useState("failed");
    const [planets, setPlanets] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [firstPlanet, setFirstPlanet] = useState("")
    const [secondPlanet, setSecondPlanet] = useState("")
    const [thirdPlanet, setThirdPlanet] = useState("")
    const [fourPlanet, setFourPlanet] = useState("")

    const [firstVehicle, setFirstVehicle] = useState("")
    const [secondVehicle, setSecondVehicle] = useState("")
    const [thirdVehicle, setThirdVehicle] = useState("")
    const [fourVehicle, setFourVehicle] = useState("")

    const [timeTaken, setTimeTaken] = useState(0)
    const [showFalcone, setShowFalcone] = useState({});
    const [loadingBtn, setLoadingBtn] = useState(false)

    const [firstMissionTime, setFirstMissionTime] = useState(0);
    const [secondMissionTime, setSecondMissionTime] = useState(0);
    const [thirdMissionTime, setThirdMissionTime] = useState(0);
    const [fourMissionTime, setFourMissionTime] = useState(0);


    useEffect(() => {

        try {
            axois.get(backendApi + "/planets").then(res => {
                if (res.data) {
                    let planets = getRandomItem(res.data);
                    setPlanets(planets);
                }

            })
        } catch (error) {
        }

    }, [])


    useEffect(() => {
        try {
            axois.get(backendApi + "/vehicles").then(res => {
                if (res.data) {
                    setVehicles(res.data);
                }
            })
        } catch (error) {
        }

    }, [])



    function getRandomItem(arr) {

        var items = arr
        var newItems = [];

        for (var i = 0; i < 4; i++) {
            var idx = Math.floor(Math.random() * items.length);
            newItems.push(items[idx]);
            items.splice(idx, 1);
        }
        return newItems;
    }


    const selectedPlanet = (e) => {
        if (e.target.name == "first") {
            setFirstPlanet(e.target.value);
            setFirstVehicle("");
            calculatedDistanceTime(e.target.value, null, 'first');
        } else if (e.target.name == "second") {
            setSecondPlanet(e.target.value);
            setSecondVehicle("");
            calculatedDistanceTime(e.target.value, null, 'second');
        }
        else if (e.target.name == "third") {
            setThirdPlanet(e.target.value);
            setThirdVehicle("")
            calculatedDistanceTime(e.target.value, null, 'third');
        }
        else if (e.target.name == "four") {
            setFourPlanet(e.target.value);
            setFourVehicle("")
            calculatedDistanceTime(e.target.value, null, 'four');
        }
    }


    const selectedVehicle = (nthVehicle, vehicleName) => {
        if (nthVehicle == "first") {
            setFirstVehicle(vehicleName);
            calculatedDistanceTime(null, vehicleName, 'first');
        }
        else if (nthVehicle == "second") {
            setSecondVehicle(vehicleName);
            calculatedDistanceTime(null, vehicleName, 'second');
        }
        else if (nthVehicle == "third") {
            setThirdVehicle(vehicleName);
            calculatedDistanceTime(null, vehicleName, 'third');
        }
        else if (nthVehicle == "four") {
            setFourVehicle(vehicleName);
            calculatedDistanceTime(null, vehicleName, 'four');
        }

    }

    const calculatedDistanceTime = (selectedPlanet = null, selectedVehicle = null, nth) => {

        let distance = getTotalDistance(selectedPlanet, nth);
        let speed = getSpeed(selectedVehicle);
        let time = (distance !== 0 && speed !== 0 ? Math.floor(distance / speed) : 0);

        if (nth == 'first') {
            let totalTime = time + secondMissionTime + thirdMissionTime + fourMissionTime;
            setFirstMissionTime(time);
            setTimeTaken(totalTime);
        } else if (nth == 'second') {
            let totalTime = firstMissionTime + time + thirdMissionTime + fourMissionTime;
            setSecondMissionTime(time);
            setTimeTaken(totalTime);
        } else if (nth == 'third') {
            let totalTime = firstMissionTime + secondMissionTime + time + fourMissionTime;
            setThirdMissionTime(time);
            setTimeTaken(totalTime);
        } else if (nth == 'four') {
            let totalTime = firstMissionTime + secondMissionTime + thirdMissionTime + time;
            setFourMissionTime(time);
            setTimeTaken(totalTime);
        }



    }

    const getDistance = (selectedPlanet) => {

        let distance = 0;

        if (planets.length > 0) {
            planets.map(pd => {
                if (pd.name === selectedPlanet) {
                    distance = pd.distance;
                }
            })
        }

        return distance;
    }

    const getTotalDistance = (selectedPlanet, nth) => {
        let distance = 0;
        if (nth == 'first') {
            if (selectedPlanet !== null) {
                distance += getDistance(selectedPlanet);
            } else {
                distance += getDistance(firstPlanet);
            }
        }

        else if (nth == 'second') {
            if (selectedPlanet !== null) {
                distance += getDistance(selectedPlanet);
            } else {
                distance += getDistance(secondPlanet);
            }
        }


        else if (nth == 'third') {
            if (selectedPlanet !== null) {
                distance += getDistance(selectedPlanet);
            } else {
                distance += getDistance(thirdPlanet);
            }
        }

        else if (nth == 'four') {
            if (selectedPlanet !== null) {
                distance += getDistance(selectedPlanet);
            } else {
                distance += getDistance(fourPlanet);
            }
        }


        return distance;

    }


    const getSpeed = (selectedVehicle) => {

        let speed = 0;

        if (vehicles.length > 0) {
            vehicles.map(pd => {

                if (pd.name == selectedVehicle) {
                    speed = pd.speed
                }
            })
        }
        return speed;
    }

    const getTotalSpeed = (selectedVehicle, nth) => {

        let speed = 0;
        if (nth == 'first') {
            if (selectedVehicle !== null) {
                speed += getSpeed(selectedPlanet);
            } else {
                speed += getSpeed(firstVehicle);
            }
        }

        else if (nth == 'second') {
            if (selectedVehicle !== null) {
                speed += getSpeed(selectedPlanet);
            } else {
                speed += getSpeed(secondVehicle);
            }
        }


        else if (nth == 'third') {
            if (selectedVehicle !== null) {
                speed += getSpeed(selectedPlanet);
            } else {
                speed += getSpeed(thirdVehicle);
            }
        }

        else if (nth == 'four') {
            if (selectedVehicle !== null) {
                speed += getSpeed(selectedPlanet);
            } else {
                speed += getSpeed(fourVehicle);
            }
        }


        return speed;



    }

    const getToken = async () => {


        const config = {
            headers: {
                'Accept': 'application/json',
            }
        }
        const data = {

        }

        try {
            let response = await axois.post(backendApi + "/token", data, config);
            return response;


        } catch (error) {

        }


    }

    const findFalcone = async () => {

        setLoadingBtn(true);

        try {
            let token = await getToken();

            const config = {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }


            const data = {
                "token": token.data.token,
                "planet_names": [firstPlanet, secondPlanet, thirdPlanet, fourPlanet],
                "vehicle_names": [firstVehicle, secondVehicle, thirdVehicle, fourVehicle]

            }

            axois.post(backendApi + "/find", data, config).then(res => {
                setShowFalcone(res.data)
                setLoadingBtn(false);
            });



        } catch (error) {
            setLoadingBtn(false);
        }


    }


    const refresh = () => {
        setFirstPlanet("");
        setSecondPlanet("");
        setThirdPlanet("");
        setFourPlanet("");
        setFirstVehicle("");
        setSecondVehicle("");
        setThirdVehicle("");
        setFourVehicle("");
        setTimeTaken(0);
        setShowFalcone({});
    }

    return (<AuthContext.Provider
        value={{
            planets,
            vehicles,
            firstPlanet,
            secondPlanet,
            thirdPlanet,
            fourPlanet,
            firstVehicle,
            secondVehicle,
            thirdVehicle,
            fourVehicle,
            timeTaken,
            loadingBtn,
            showFalcone,
            selectedPlanet,
            selectedVehicle,
            selectedPlanet,
            selectedVehicle,
            findFalcone,
            refresh
        }}>
        {props.children}
    </AuthContext.Provider>)

}


export default AuthContext