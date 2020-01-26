import React, { createContext, useReducer } from 'react';

import trainReducer from '../reducer/TrainReducer';

export const TrainContext = React.createContext();

const initialState = {
    train: undefined,
    runningStatus: undefined,
    trainsBetweenStation: undefined,
    route: undefined,
    trainName: {},
    fare: {},
    cancelledTrains: {},
    rescheduledTrains: {},
    trains: [],
    stations: []
}
const TrainProvider = (props) => {

    const [state, dispatch] = useReducer(trainReducer, initialState);

    return (
        <TrainContext.Provider value={{
            state,
            dispatch
        }}>
            {props.children}
        </TrainContext.Provider>
    )
}

export default TrainProvider;