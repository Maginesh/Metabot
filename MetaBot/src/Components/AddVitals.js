import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddVitals() {
    const nav = useNavigate();
    const [details, setDetails] = useState({});

    const handleChange = (event) => {
        setDetails({ ...details, [event.target.name]: event.target.value });
    }

    async function handleSubmit() {

        details["temp"] = parseFloat(details["temp"]);
        details["id"] = window.sessionStorage.getItem("id");
        console.log(details);

        const r = await axios.post('http://localhost:8080/vitals/add', details);
        const res = await r.data

        if (res.vitals === "abnormal") {
            alert("Your vitals are abnormal and your consultant has been notified");
        }
        else {
            alert("Everything looks great!!")
        }
    }

    return (
        <div className="bg-pink-200 h-screen flex justify-center items-center">
            <div className="bg-white w-96 h-150 rounded-lg shadow-lg flex flex-col justify-center items-center p-5">
                <h1 className="text-3xl font-bold text-gray-800 mt-3">Add Vitals</h1>
                <div className="flex flex-col justify-center items-center mt-3">
                    <input
                        type="number"
                        name="heartrate"
                        placeholder="Heartrate in bpm"
                        className="w-72 h-10 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-pink-500 mt-4"
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="oxygen"
                        placeholder="Oxygen level in percentage"
                        className="w-72 h-10 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-pink-500 mt-4"
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="stress"
                        placeholder="Stress level"
                        className="w-72 h-10 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-pink-500 mt-4"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="temp"
                        placeholder="Body temperature"
                        className="w-72 h-10 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-pink-500 mt-4"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="bpUp"
                        placeholder="Systolic Blood Pressure"
                        className="w-72 h-10 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-pink-500 mt-4"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="bpLow"
                        placeholder="Diastolic Blood Pressure"
                        className="w-72 h-10 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-pink-500 mt-4"
                        onChange={handleChange}
                    />


                    <button
                        className="bg-pink-500 w-72 h-10 rounded-lg text-white mt-4"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddVitals;