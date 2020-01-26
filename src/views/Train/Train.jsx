import React, { useState, useContext, useEffect } from 'react';

import { TrainContext } from '../../context/TrainContext';

import TrainSearchBar from './TrainSearch';
import TrainRunningStatus from './TrainRunningStatus';


const API_KEY = ''

const Train = () => {

    const { state, dispatch } = useContext(TrainContext)

    const [train, setTrain] = useState(state.train);

    const [fare, setFare] = useState(state)
    const [route, setRoute] = useState(state)
    const [trains, setTrains] = useState(state)
    const [stations, setStations] = useState(state)
    const [trainName, setTrainName] = useState(state)
    const [runningStatus, setRunningStatus] = useState(state)
    const [cancelledTrains, setCancelledTrains] = useState(state)
    const [rescheduledTrains, setRescheduledTrains] = useState(state)
    const [trainsBetweenStation, setTrainsBetweenStation] = useState(state)

    useEffect(() => { console.log('Úsing effect', state) }, state)

    const getTrains = (e) => {
        e.preventDefault();
        let searchtext = e.target.value;
        let result = {
            trains: [{
                name: 'Shiv Ganga',
                number: '12345'
            }, {
                name: 'Shiv Ganga Exp',
                number: '12346'
            }]
        }
        if (searchtext.length > 3) {
            // fetch(`https://api.railwayapi.com/v2/suggest-train/train/${searchtext}/apikey/${API_KEY}/`)
            //     .then(response => response.json())
            //     .then(result =>
            // dispatch({
            //     type: 'LOAD_TRAINS',
            //     payload: { trains: result.trains }
            // })
            //   )
            dispatch({
                type: 'LOAD_TRAINS',
                payload: { trains: result.trains }
            })
        }
    }
    const getTrainRunningStatus = () => {
        console.log(state)
        if (!state.runningStatus) {
            fetch('https://api.github.com/users?since=135')
                .then(response => response.json())
                .then(async result => {
                    console.log(result)
                    await dispatch({
                        type: 'TRAIN_RUNNING_STATUS',
                        payload: { runningStatus: result }
                    })
                    // await setRunningStatus(state.runningStatus)
                })
        }
    }


    const handleTrainChange = async (trainNumber) => {
        console.log('Handline train change', trainNumber)
        await setTrain(trainNumber)
        console.log(state)
    }
    return (
        <div>
            <TrainSearchBar trains={state.trains} getTrains={getTrains} setTrain={handleTrainChange} />
            <label>TRAIN: {train}</label>
            {runningStatus && <TrainRunningStatus train={train} runningStatus={runningStatus} />}
        </div>
    )
}

export default Train;   