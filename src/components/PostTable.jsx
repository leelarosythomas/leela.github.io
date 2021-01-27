import React from 'react';

const PostTable = (props) => {
    return (
<div className="table-responsive">
     
        <table className = "table table-striped table-bordered">

                <thead>
                    <tr>
                        <th>No.</th>
                        <th> User ID</th>
                        <th> Title</th>
                        <th> Body</th>
                        <th> Actions</th>
                    </tr>
                </thead>
                <tbody>
                { props.posts.length > 0 ? (
                    props.posts.map(post => {
                        const {id, userId, title, body} = post;
                        return (
                            <tr key = {id}>
                                <td>{id}</td>
                                 <td> {userId} </td>   
                                 <td> {title}</td>
                                 <td> {body}</td>
                                 <td>
                                 <button onClick={() => props.deletePost(id)} className="btn btn-danger w-100 mb-1">Delete</button>
                                 <button onClick={() => props.editPost(id)} className="btn btn-info w-100 mb-1">Edit</button>
                                      
                                     <button onClick={() => props.viewPost(id)}  className="btn btn-info w-100 ">View </button>
                                 </td>
                            </tr>
                       )
                                   })
                               ) : (
                                   <tr>
                                       <td colSpan={4}>No users found</td>
                                   </tr>
                               )   
                               }
                </tbody>
            </table>
            </div>
        
    )
}

export default PostTable;
