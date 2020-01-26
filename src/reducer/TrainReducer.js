
const trainReducer = (state, action) => {
    switch (action.type) {
        case "TRAIN_RUNNING_STATUS":
            console.log('TRAIN_RUNNING_STATUS', state, action)
            return {
                ...state,
                runningStatus: action.payload.runningStatus
            };
        case "TRAIN_BETWEEN_STATIONS":
            console.log('TRAIN_BETWEEN_STATIONS', state)
            return {
                ...state,
                trainsBetweenStation: action.payload.trainsBetweenStation
            };
        case "TRAIN_ROUTE": {
            console.log('MORE')
            return {
                ...state,
                route: action.payload.route
            }
        }
        case "TRAINS_NUMBER_NAME": {
            console.log('MORE')
            return {
                ...state,
                trainName: action.payload.trainName
            }
        }
        case "TRAIN_FARE_ENQUIRY": {
            console.log('MORE')
            return {
                ...state,
                fare: action.payload.fare
            }
        }
        case "TRAIN_ARRIVALS": {
            console.log('MORE')
            return {
                ...state,
                runningStatus: action.payload.runningStatus
            }
        }
        case "CANCELLED_TRAINS": {
            console.log('MORE')
            return {
                ...state,
                cancelledTrains: action.payload.cancelledTrains
            }
        }
        case "RESCHEDULED_TRAINS": {
            console.log('MORE')
            return {
                ...state,
                rescheduledTrains: action.payload.rescheduledTrains
            }
        }
        case "LOAD_TRAINS": {
            console.log('MORE')
            return {
                ...state,
                trains: action.payload.trains
            }
        }
        case "LOAD_STATIONS": {
            console.log('MORE')
            return {
                ...state,
                stations: action.payload.stations
            }
        }
        case "SELECTED_TRAIN": {
            console.log('SELECTED_TRAIN')
            return {
                ...state,
                train: action.payload.train
            }
        }
        default:
            return state;
    }
}

export default trainReducer;