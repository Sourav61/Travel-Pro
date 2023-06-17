import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./home.scss"
import { Box, Button, Grid, Typography } from "@mui/material";
import SimpleSelectMenu from "../../components/SimpleSelectMenu";
import TravelersSelectMenu from "../../components/TravelersSelectMenu";
import BagsSelectMenu from "../../components/BagsSelectMenu";
import { db } from '../../../admin/firebase-config';
import { collection, getDocs, query, where } from '@firebase/firestore';
import SearchIcon from "@mui/icons-material/Search";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { userColumns, userRows } from "../../../admin/datatablesource";
import DateComponent from '../../components/DateComponent';
import { useSelector } from 'react-redux';
const Home = () => {
    const [data, setData] = useState([])
    const usersCollectionRef = collection(db, "flights")
    const [type, setType] = useState("");
    const [airlines, setAirlines] = useState("");
    const [seats, setSeats] = useState(60);
    const [category, setCategory] = useState("economy");
    const [price, setPrice] = useState(3000);
    const [stops, setStops] = useState(0);
    const [departure, setDeparture] = useState(new Date().getTime());
    const [arrival, setArrival] = useState(new Date().getTime());
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");

    const { arrivalTime, departureTime } = useSelector((state) => state.time);

    const ref = collection(db, "flights");

    useEffect(() => {
        const getFlightDetails = async () => {
            const data = await getDocs(usersCollectionRef);
            setData(data?.docs?.map(doc => ({ ...doc.data(), id: doc.id })))
        }

        getFlightDetails();
    }, [])

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const handleClick = async () => {
        const q = query(ref, where("departure", ">=", departureTime));

        const querySnapshot = await getDocs(q);
        var result = [];
        querySnapshot.forEach((doc) => {
            let obj = Object.assign(doc.data(), { id: doc.id });
            console.log('object', obj);
            if (doc.data().arrival <= arrivalTime) {
                result.push(obj);
            }
        });

        setData(result);
    };

    return (
        <div className='home'>
            <Navbar />
            <h1>Where would you like to go?</h1>
            <div className="filters">
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        marginTop: "20px",
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={6} md={3} lg={3}>
                            <SimpleSelectMenu
                                options={["One-way", "Round-trip", "Multi-city", "Trip Builder"]}
                                label={"Flights"}
                                // onClickHandle={() => updateSearch(param)}
                                setType={setType}
                                type={type}
                            />
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={3}>
                            {/* <TravelersSelectMenu
                                options={[
                                    ["Adults", "18-64"],
                                    ["Students", "over 18"],
                                    ["Seniors", "65+"],
                                    ["Youths", "12-17"],
                                    ["Children", "2-11"],
                                    ["Toddler in own seat", "under 2"],
                                    ["Infant in lap", "under 2"],
                                ]}
                                label={"Travelers"}

                            // onClickHandle={() => updateSearch(param, state)}
                            /> */}
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={3}>
                            <SimpleSelectMenu
                                options={["Economy", "Premium Economy", "Business", "First", "Multiple"]}
                                label={"Class"}
                                setCategory={setCategory}
                                category={category}
                            // onClickHandle={() => updateSearch(param, state)}
                            />
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={3}>
                            <BagsSelectMenu options={["Carry-on", "Checked"]} label={"Bags"}
                            // handleClick={() => updateSearch(param, state)} 
                            />
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <Grid spacing={2} mt={2}>
                <DateComponent />
            </Grid>
            <div className="search">
                <Grid justifyContent="center" alignItems="center">
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} fullWidth>
                        <Button
                            fullWidth
                            maxWidth={"600px"}
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={() => handleClick()}
                            sx={{
                                background: "linear-gradient(135deg,#ff690f 0%,#e8381b 100%)",
                            }}
                            startIcon={<SearchIcon />}
                        >
                            Search
                        </Button>
                    </Box>
                </Grid>
            </div>
            <div className="results">
                <div className="datatable">
                    <DataGrid
                        className="datagrid"
                        rows={data}
                        columns={userColumns}
                        pageSize={9}
                        rowsPerPageOptions={[9]}
                        checkboxSelection
                    />
                </div>
            </div>
        </div>
    )
}

export default Home