import React, { useState, useEffect } from 'react';

const cohortName = '2211-FTB-ET-WEB-AM';
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}/posts`

const RenderAllPosts = () => {

  const[postList, setPostList] = useState([]);

  useEffect(() => {
    fetchAllPosts()
  }, [],
  console.log(postList, 'updated post list')
  )

  const fetchAllPosts = async () => {
    try {
      const response = await fetch(`${APIURL}`);
      const result = await response.json();
      if (result.error) {
        throw (result.error);
        }
        return setPostList(result.data.posts)
      } catch (err) {
        console.error('Uh oh, trouble fetching posts!', err);
      }
    };

    if (!postList || !postList.length) {
      return <h3>No posts to display!</h3>;
    } else {
      return postList.map((postList) => {
        console.log(postList.title, 'for sale')
        return(
          <div>
            <h1 key="title" >{postList.title}</h1>
            <h3 key="price" >Price : {postList.price}</h3>
            <h3 key="location">Location : {postList.location}</h3>
          </div> 
        )
      })
    }
  }

  export default RenderAllPosts