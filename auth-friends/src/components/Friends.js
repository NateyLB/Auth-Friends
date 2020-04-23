import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth.js'

import Friend from './Friend.js';

const Friends = props =>{
    //state for friends, get data from API
    const [friends, setFriends] = useState([])
    //state for id for addFriend
    const [id, setId] = useState()
    //state for form to add a friend
    const [addFriend, setAddFriend] = useState({id:id, name:'', age:'', email:''});
    const [buttonEnable, setButtonEnable] = useState(true)
    //get data on render
    useEffect(()=>{
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            setFriends(res.data)
            setId(res.data.length+1)
        })
        .catch(err => console.log({ err }));
    },[])
    
    //handles form changes and makes sure they are inputted to before submitting
     const handleChange = event => {
        setAddFriend({ ...addFriend, [event.target.name]: event.target.value })
        if( addFriend.name.length>0 && addFriend.age.length>0 && addFriend.email.length>0 ){
            setButtonEnable(false)}
    };
    //deletes a selected friend through .delete request
    const deleteFriend = id =>{
        axiosWithAuth()
        .delete(`/api/friends/${id}`)
        .then(res => setFriends(res.data))
        .catch(err => console.log(err))
    }
    //returns an array of friend cards
    const makeFriendsCards = ()=>{
       return friends.map(element => <Friend friend={element} setFriends={setFriends} deleteFriend={deleteFriend} key={element.id}/>)
    }
    //submits a new friend through a .post request
    const submitFriend = event =>{
        event.preventDefault()
        axiosWithAuth()
        .post('/api/friends', addFriend)
        .then(res => setFriends(res.data))
        .catch(err => console.log(err))
    }

    return(
        //renders friends card and a form to add a friends
        <div className='friends-container'>
            {makeFriendsCards()}
            <h3>Add a Friend</h3>
            <form className='form' onSubmit={submitFriend}>
                <label htmlFor="name">
                    Name:
                <input name='name' type="text" onChange={handleChange} />
                </label>
                <label htmlFor="age">
                    Age:
                <input name='age' type="text" onChange={handleChange} />
                </label>
                <label htmlFor="name">
                    Email:
                <input name='email' type="email" onChange={handleChange} />
                </label>
                <input disabled={buttonEnable} className='submit-friend-button' name='submit' type='submit' />

            </form>
        </div>
    )
}

export default Friends;