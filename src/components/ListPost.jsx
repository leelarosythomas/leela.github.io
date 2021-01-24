import React, { useState} from 'react';

import postList from './post.js';
import PostTable from './PostTable';
 


const ListPost = (props) => {
    const [posts, setPosts] = useState(postList);
     
   const addPost = () => {
    props.history.push('/add-post/_add');
   }
   const viewPost = (id) => {
    props.history.push(`/view-post/${id}`);
   }
   const editPost = (id) => {
      props.history.push(`/add-post/${id}`);
     }
  
   const deletePost = id => setPosts(posts.filter(post => post.id !== id));
   

   
   
 
  
  return (
    
     <div className="mt-4 mb-4">
     <h2 className="text-center">Posts List</h2>
     <div className = "row">
          <button className="btn btn-primary" onClick={addPost}> Add Post</button>  
     </div>
     <br></br>
     <div className = "row">
      
       <PostTable posts={posts} deletePost={deletePost} editPost={editPost} viewPost={viewPost}></PostTable>
            

     </div>

</div>
  );
}
 
  
 
export default ListPost