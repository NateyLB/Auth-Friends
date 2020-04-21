import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth.js'


const Friend = props => {

    const [editFriend, setEditFriend] = useState({ name: props.friend.name, age: props.friend.age, email: props.friend.email })
    const [edit, setEdit] = useState(false)
    const handleChange = event => {
        setEditFriend({ ...editFriend, [event.target.name]: event.target.value })
        console.log({editFriend})
    };

    const submitEdit = event =>{
        event.preventDefault();
        axiosWithAuth()
        .put(`/api/friends/1`, editFriend)
        .then(res => setEdit(false))
        .catch(err =>console.log(err))

    }



    return (
        edit === false ?
            <div className='friend-card'>
                <h3>Name: {props.friend.name}</h3>
                <h4>Age: {props.friend.age}</h4>
                <h4>Email: {props.friend.email}</h4>
                <button onClick={() => props.deleteFriend(props.friend.id)}> Delete</button>
                <button onClick={() => setEdit(!edit)}> Edit</button>
            </div> :
            <form className='friend-card friends-container'>
                <div className='edit-input'>
                    <h3>Name: </h3>
                    <input type='text' name='name' onChange={handleChange} />
                </div>
                <div className='edit-input'>
                    <h4>Age: </h4>
                    <input type='text' name='age' onChange={handleChange} />
                </div>
                <div className='edit-input'>
                    <h4>Email: </h4>
                    <input type='email' name='email' onChange={handleChange} />
                </div>
                <div className='edit-buttons'>
                <button onClick={ submitEdit}>Submit</button>
                <button onClick={() => setEdit(!edit)}> Edit</button>
                </div>
            </form>


    )
}

export default Friend;