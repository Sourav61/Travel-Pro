import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./home.scss"
import { TextField, Button, Box, Container, Grid } from "@mui/material";
import FiltersContainer from '../../container/FiltersContainer';

function home() {

    return (
        <div className='home'>
            <Navbar />
            <h1>Where would you like to go?</h1>
            <FiltersContainer />
        </div>
    )
}

export default home