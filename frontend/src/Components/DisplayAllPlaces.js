import axios from "axios";
import { useEffect, useState } from "react";
const API = process.env.REACT_APP_API_URL;

const DisplayAllPlaces = () =>{
    const[ places, setPlaces ]= useState([]);

    

    useEffect(()=>{
        axios.get(`${API}/places`)
        .then((res)=>{
            setPlaces(res.data)
            console.log(places)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])


    return (
        <div><h1>Displaying all places</h1></div>
    )
}

export default DisplayAllPlaces