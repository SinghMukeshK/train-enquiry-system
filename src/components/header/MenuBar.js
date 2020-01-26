import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person'

import { AuthContext } from '../../context/AuthContext';

const url = 'http://api-vacancies.herokuapp.com/vacancies';


const MenuBar = () => {
    const { state, dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        dispatch({
            type: "LOGIN",
            payload: { user: 'testData', token: 'qqh23kj2h3kj2be23jh2g4j' }
        })
    }

    const handleLogout = () => {
        dispatch({
            type: "LOGOUT",
            payload: { user: 'testData', token: 'qqh23kj2h3kj2be23jh2g4j' }
        })
    }

    const getVacancies = () => {
        fetch(url)
            .then(response => response.json())
            .then(result => {
                dispatch({
                    type: "MORE",
                    payload: { vacancies: result.data }
                })
            })
    }

    return (
        <AppBar position="static" color="secondary" styles={{
            background: '#0F2027', /* fallback for old browsers */
            background: '-webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027)',  /* Chrome 10-25, Safari 5.1-6 */
            background: 'linear-gradient(to right, #2C5364, #203A43, #0F2027)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }} >
            <Toolbar variant="dense">
                <IconButton onClick={handleLogin} edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>

                <Typography variant="h6" color="inherit">Home</Typography>

                <Typography variant="h6" color="inherit">
                    <Link to="/Vacancies">Vacancies</Link>
                </Typography>

                <Typography variant="h6" color="inherit">
                    <Link to="/trains">Trains</Link>
                </Typography>


                {state.isAuthenticated &&
                    <>
                        <IconButton onClick={handleLogout} edge="start" styles={{ float: 'right' }} color="inherit" aria-label="menu">
                            <PersonIcon />
                        </IconButton>
                        <IconButton onClick={getVacancies} edge="start" styles={{ float: 'right' }} color="inherit" aria-label="menu">
                            <PersonIcon />
                        </IconButton>
                    </>
                }
            </Toolbar>
        </AppBar >
    )
}

export default MenuBar;