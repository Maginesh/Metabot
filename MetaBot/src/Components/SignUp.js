import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Form() {
    const nav = useNavigate();
    const [details, setDetails] = useState({});

    const [pok, setPok] = useState(false);
    const [cpok, setCpok] = useState(false);

    const handleChange = (event) => {
        setDetails({ ...details, [event.target.name]: event.target.value });
    }

    const handlePw = (event) => {
        const val = event.target.value;
        if (pwValidate(val) === 4 && val.length >= 8) {
            setPok(true);
            setDetails({ ...details, [event.target.name]: val });
        }
    }

    function handleCpw(event) {
        const val = event.target.value;
        if (val === details["password"]) {
            setCpok(true);
        }
    }

    function pwValidate(pw) {
        let strength = 0;
        if (pw.match(/(?=.*[a-z])/)) {
            strength++;
        }
        if (pw.match(/(?=.*[A-Z])/)) {
            strength++;
        }
        if (pw.match(/(?=.*[0-9])/)) {
            strength++;
        }
        if (pw.match(/(?=.*[!@#\$%\^&\*])/)) {
            strength++;
        }
        return strength;
    }

    async function handleSubmit() {
        if (pok && cpok) {
            console.log(details);

            const res = await fetch('http://localhost:8080/signup', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(details)
            });
            console.log(res);

            window.sessionStorage.setItem('id', details.id);
        }
    }

    return (
        <div className="bg-pink-200 h-screen flex justify-center items-center">
            <div className="bg-white w-96 h-150 rounded-lg shadow-lg flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold text-gray-800 mt-5">Sign Up</h1>
                <div className="flex flex-col justify-center items-center mt-8">
                    <input
                        type="text"
                        name="id"
                        placeholder="Patient ID"
                        className="w-72 h-10 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-pink-500 mt-4"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Patient Name"
                        className="w-72 h-10 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-pink-500 mt-4"
                        onChange={handleChange}
                    />

                    <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        className="w-72 h-10 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-pink-500 mt-4"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="bloodGrp"
                        placeholder="Blood Group"
                        className="w-72 h-10 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-pink-500 mt-4"
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-72 h-10 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-pink-500 mt-4"
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name='consEmail'
                        placeholder="Consultant Email"
                        className="w-72 h-10 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-pink-500 mt-4"
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-72 h-10 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-pink-500 mt-4"
                        onChange={handlePw}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="w-72 h-10 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-pink-500 mt-4"
                        onChange={handleCpw}
                    />
                    <button
                        className="bg-pink-500 w-72 h-10 rounded-lg text-white mt-4"
                        onClick={handleSubmit}
                    >
                        Sign Up
                    </button>
                </div>
                <div className="flex flex-col justify-center items-center h-full">
                    <p className="text-sm text-gray-500 mt-2">Already have an account? <Link to="/signin" className="text-blue-500">Sign in</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Form;