import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth.js'


const Friend = props => {

    //state for our editted friend
    const [editFriend, setEditFriend] = useState({ name: props.friend.name, age: props.friend.age, email: props.friend.email })
    //state for out edit, false is not editing true is editing
    const [edit, setEdit] = useState(false)
    //handle form changes
    const handleChange = event => {
        setEditFriend({ ...editFriend, [event.target.name]: event.target.value })
        console.log({editFriend})
    };

    //submits the editted movie through a .put request
    const submitEdit = event =>{
        event.preventDefault();
        axiosWithAuth()
        .put(`/api/friends/${props.friend.id}`, editFriend)
        .then(res => {
            setEdit(false);
            props.setFriends(res.data)
        })
        .catch(err =>console.log(err))

    }



    return (
        //renders movie card if edit is false and a form if it is true
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
                    <input type='text' name='name' placeholder={props.friend.name} onChange={handleChange} />
                </div>
                <div className='edit-input'>
                    <h4>Age: </h4>
                    <input type='text' name='age' placeholder={props.friend.age} onChange={handleChange} />
                </div>
                <div className='edit-input'>
                    <h4>Email: </h4>
                    <input type='email' name='email' placeholder={props.friend.email} onChange={handleChange} />
                </div>
                <div className='edit-buttons'>
                <button onClick={ submitEdit}>Submit</button>
                <button onClick={() => setEdit(!edit)}> Cancel </button>
                </div>
            </form>


    )
}

export default Friend;