import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState()
    const [roll, setRoll] = useState("")
    const [data, setdata] = useState({
        name: "",
        age:"",
        roll:""
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("handleSubmit")
        setdata({
            name,
            age,
            roll
        })

    }


    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <input type='text' onChange={(e) => setName(e.target.value)} name='name' />
                <input type='text' onChange={(e) => setAge(e.target.value)} name='age' />
                <input type='text' onChange={(e) => setRoll(e.target.value)} name='roll' />
                <button type='submit'>Submit</button>

            </form>
            <h3>{data.name}{data.age}</h3>

        </div>
    )
}

export default Form