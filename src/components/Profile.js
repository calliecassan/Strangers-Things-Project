import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const cohortName = '2211-FTB-ET-WEB-AM';
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}/users/me`


const Profile =  () => {

  const[postList, setPostList] = useState([]);

  useEffect(() => {
    myData()
  }, [],
  console.log(postList, 'updated post list')
  )

  const myData = async() => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${APIURL}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      const result = await response.json();
      setPostList(result.data.posts);
    } catch (err) {
      console.error(err);
    }
  }
return (
  <div>
    {postList.map(
      (post) => {
        return (
          <div key={post._id}>
            <h1>{post.title}</h1>
            <h2>{post.price}</h2>
            <h3>{post.description}</h3>
          </div>
        )
      }
    )}
    <Link to = "/">Go back</Link>
  </div>
)

}

export default Profile;
