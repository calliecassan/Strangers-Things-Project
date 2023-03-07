import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const cohortName = '2211-FTB-ET-WEB-AM';
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}/posts`;

const NewPost =  ({isLoggedIn, postList, setPostList}) => {
console.log(isLoggedIn);
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [price, setPrice] = useState('');

const fetchAllPosts = async () => {
  try {
    const response = await fetch(`${APIURL}`);
    const result = await response.json();
    if (result.error) {
      throw (result.error);
      }
      setPostList(result.data.posts)
    } catch (err) {
      console.error('Uh oh, trouble fetching posts!', err);
    }
  };

const handleSubmit = async (event) => {
  try {
    event.preventDefault()
    const token = localStorage.getItem('token');
    const response = await fetch(`${APIURL}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post: {
          title: title,
          description: description,
          price: price,
          willDeliver: true
        }
      })
    });
    const result = await response.json();
    console.log(result);
    fetchAllPosts()
  } catch (err) {
    console.error(err);
  }}

if (isLoggedIn) {
  return(
    <div id="navbar">
      <form onSubmit= {handleSubmit}>
        <label htmlFor='title'>Title:</label>
        <input type='text' name='item for sale' value={title} onChange={(event) => setTitle(event.target.value)}/>
        <label htmlFor='description'>Description:</label>
        <input type='text' name='Item Description' value={description} onChange={(event) => setDescription(event.target.value)} />
        <label htmlFor='price'>Price:</label>
        <input type='number' name='Dollar Amount' value={price} onChange={(event) => setPrice(event.target.value)} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
} else {
  return (
    <div>
     
      </div>
  )
}
}


export default NewPost
