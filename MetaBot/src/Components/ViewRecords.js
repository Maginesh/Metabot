import React, { useState } from 'react';
import axios from 'axios';

function ViewRecords() {
    const [details, setDetails] = useState({});
    const [results, setResults] = useState([]);

    const handleChange = (event) => {
        setDetails({ ...details, [event.target.name]: event.target.value });
    }

    async function handleSubmit() {

        details["temp"] = parseFloat(details["temp"]);
        details["id"] = window.sessionStorage.getItem("id");
        console.log(details);

        const r = await axios.post('http://localhost:8080/vitals/get', details);
        const res = await r.data;
        console.log(res)
        setResults(res);
    }

    return (
        <div className="bg-pink-200 h-screen flex flex-row">
            <div className="bg-white w-96 h-150 rounded-lg shadow-lg flex flex-col justify-center items-center p-5">
                <h1 className="text-3xl font-bold text-gray-800 mt-3">Get Records</h1>
                <div className="flex flex-col justify-center items-center mt-3">
                    <input
                        type="text"
                        name="id"
                        placeholder="Enter Patient ID"
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
            <table className="w-full text-sm text-left text-gray-500">
                <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                    <tr>
                        <th class="px-3 py-2 text-center">Heartrate</th>
                        <th class="px-3 py-2 text-center">Oxygen Level</th>
                        <th class="px-3 py-2 text-center">Systolic Blood Pressure</th>
                        <th class="px-3 py-2 text-center">Diastolic Blood Pressure</th>
                        <th class="px-3 py-2 text-center">Stress Level</th>
                        <th class="px-3 py-2 text-center">Body Temperature</th>
                        <th class="px-3 py-2 text-center">Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        results.map((ele) => {
                            return (
                                <tr>
                                    <td class="px-3 py-2 text-center text-gray-800">{ele.heartrate}</td>
                                    <td class="px-3 py-2 text-center text-gray-800">{ele.oxygen}</td>
                                    <td class="px-3 py-2 text-center text-gray-800">{ele.bpUp}</td>
                                    <td class="px-3 py-2 text-center text-gray-800">{ele.bpLow}</td>
                                    <td class="px-3 py-2 text-center text-gray-800">{ele.stress}</td>
                                    <td class="px-3 py-2 text-center text-gray-800">{ele.temp}</td>
                                    <td class="px-3 py-2 text-center text-gray-800">{ele.time}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ViewRecords;