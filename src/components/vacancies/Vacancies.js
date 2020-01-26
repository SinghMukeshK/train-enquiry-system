import React, { useContext, useState, useEffect } from 'react';

import { AuthContext } from '../../context/AuthContext';

const style = {
    height: {
        paddingTop: "100px"
    }
}
const Vacancies = () => {
    const { state } = useContext(AuthContext)
    const [vacancies, setVacancies] = useState([])

    // const loadVacancies = () => {
    //     setVacancies(state.vacancies)
    // }

    // useEffect(() => {
    //     loadVacancies()
    // }, state.vacancies)

    let _vacancies = vacancies && vacancies.map(element => {
        return <p>{element.title}</p>
    })

    return <p style={style.height}>
        {_vacancies}
    </p>
}

export default Vacancies;