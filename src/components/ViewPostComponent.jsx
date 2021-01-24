import React, { Component } from 'react'
import PostService from '../services/PostService'

class ViewPostComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            post: {}
        }
    }

    componentDidMount(){
        PostService.getPostById(this.state.id).then( res => {
            this.setState({post: res.data});
        })
    }

    render() {
        return (
            <div className="mt-5 mb-5">
                <div className="col-md-6 offset-md-3 mb-2 p-0"><a href="/posts">	&laquo; back</a></div> 
                <div className = "card col-md-6 offset-md-3 p-4">
                    <h3 className = "text-center"> View Post Details</h3>
                    <div className = "card-body">
                    <div className = "row mb-2">
                            <label> <b>User ID:</b> </label> 
                            <div className="ml-3"> { this.state.post.userId }</div>
                        </div>
                        <div className = "row mb-3">
                            <label> <b>Title:</b> </label><br></br>
                            <div> { this.state.post.title }</div>
                        </div>
                        <div className = "row">
                            <label> <b>Body:</b> </label><br></br>
                            <div> { this.state.post.body }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewPostComponent
