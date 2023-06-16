import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./home.scss"

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
        <div className='home'>
            {/* <div className="modal" id="modal" style={{ position: "absolute" }}>
                <h2>Modal Window</h2>
                <div className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non fuga omnis a sed impedit explicabo accusantium nihil doloremque consequuntur.</div>
                <div className="actions">
                    <button className="toggle-button">OK</button>
                </div>
            </div> */}
            <Navbar />
        </div>
    )
}

export default home