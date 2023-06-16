import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./home.scss"
import DefaultLayout from "../../layouts/DeafaultLayout";
import FlightSearcher from "../../containers/FlightSearcher";
import ResultsContainer from "../../containers/ResultsContainer";

function home() {
    function modalPopUp() {
        var buttons = document.querySelectorAll(".toggle-button");
        var modal = document.querySelector("#modal");

        [].forEach.call(buttons, function (button) {
            button.addEventListener("click", function () {
                modal.classList.toggle("off");
            });
        });
    }

    return (
        <DefaultLayout>
            <FlightSearcher />
            <ResultsContainer />
        </DefaultLayout>
    )
}

export default home