import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Registration.css'
import { NavLink } from 'react-router-dom'

const Registration = () => {

    const navigate = useNavigate()
    const [form, setForm] = useState({
        name: "",
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


            const res = await axios.get('http://localhost:3000/users')

            const user = res.data

            const existeduser = user.find((u) => u.email === form.email)

            if (existeduser) {
                alert("user allready exist")
                navigate('/login')
            }

            else {
                if (!form.email || !form.password) {
                    alert("please fill all fields")
                    return

                }

                try {
                    await axios.post('http://localhost:3000/users', form)

                    localStorage.setItem("Eyewear", JSON.stringify(form))

                    alert("Registration success")

                    navigate('/login')


                }
                catch (error) {
                    console.log("Registration failed..!!", error);

                }




            }
        }





        AddUser()


    }




    return (
        <>
            <div className="reg-container">
                <div className="reg-box">

                    <h2 className="reg-title">Create Account</h2>

                    <input required
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        value={form.name}
                        onChange={handleChange}
                        className="reg-input"
                    />

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
                        Register
                    </button>

                    <NavLink to='/login' className="login-link">
                        <p className="reg-footer">
                            Already have an account? <span>Login</span> </p>
                    </NavLink>

                </div>
            </div>
        </>
    )
}

export default Registration
