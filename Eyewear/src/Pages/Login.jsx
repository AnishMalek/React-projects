import React, { use } from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import './Registration.css'

const Login = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handlesubmit = (e) => {
        e.preventDefault()

        const AddUser = async () => {

            if (!form.email || !form.password) {
                alert("please fill all fields")
                return

            }
            try {
                const res = await axios.get('http://localhost:3000/users')

                const user = res.data

                const validuser = user.find((u) => u.email === form.email && u.password === form.password)

                if (validuser) {
                    localStorage.setItem("user", JSON.stringify(validuser))
                    alert("login succesfully")
                    navigate('/')
                    window.location.reload()

                }

                else {
                    alert("invalid email or password")
                }
            }
            catch (error) {
                console.log("Registration failed..!!", error);

            }


        }
        AddUser()
    }

    return (
        <div>
            <div className="reg-container">
                <div className="reg-box">

                    <h2 className="reg-title">Login</h2>


                    <input required
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={form.email}
                        onChange={handleChange}
                        className="reg-input"
                    />

                    <input required
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={form.password}
                        onChange={handleChange}
                        className="reg-input"
                    />

                    <button onClick={handlesubmit} className="reg-button">
                        Login
                    </button>

                    <NavLink to='/register' className="login-link">
                        <p className="reg-footer">
                            Don't have an account? <span>Register</span> </p>
                    </NavLink>

                </div>
            </div>

        </div>
    )
}

export default Login
