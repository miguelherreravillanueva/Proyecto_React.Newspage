import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Form.scss'

const Form = () => {
    let navigate = useNavigate()
    const [btnDisable, setBtnDisable] = useState(true)
    const [message, setMessage] = useState("")
    const [visible, setVisible] = useState(true)
    const [data, setData] = useState({
        title: "",
        body: "",
        date: "",
    })

    const initialState = {
        title: "",
        body: "",
        date: "",
    };


    const clearState = () => {
        setData({ ...initialState })
    };

    useEffect(() => {
        if (data.title.length < 1 || data.body.length < 1 || data.date.length < 1) {
            setMessage("All gaps must be filled to create a new")
            setBtnDisable(true)
        } else {
            setMessage(null)
            setBtnDisable(false)
        }
    }, [data]);

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Data:" + data.title + " " + data.body + " " + data.date)
        localStorage.setItem("data", JSON.stringify(data))
        clearState()
        setTimeout(() => {
            navigate("/list")
        }, 3000);
        setVisible(false)
    };

    return (
        <form>
        <div>
            <br />
            <span>Fill the gaps to create a new</span>
            <br />
            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder="News title"
                    value={data.title}
                    onChange={handleInputChange}
                    name="title"
                />
                <br />
                <input
                    type="text"
                    placeholder="News body"
                    value={data.body}
                    onChange={handleInputChange}
                    name="body"
                />
                <br />
                <input
                    type="date"
                    placeholder="News date"
                    value={data.date}
                    onChange={handleInputChange}
                    name="date"
                />
                <br />
                <button type='submit' disabled={btnDisable}>
                    Create new
                </button>
            </form>
            <p>{visible ? message : <p>You have created a new. Redirecting to <i>ListNews</i>
            </p>}
            </p>
        </div>
        </form>
    );
};

export default Form