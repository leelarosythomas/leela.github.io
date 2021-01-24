import React, { Component } from 'react'
import PostService from '../services/PostService';
 
class UpdatePostComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            userId: '',
            title: '',
            body: ''
        }
        this.changeuserIdHandler = this.changeuserIdHandler.bind(this);
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeBodyHandler = this.changeBodyHandler.bind(this);
        this.updatePost = this.updatePost.bind(this);
    }

    componentDidMount(){
        PostService.getPostById(this.state.id).then( (res) =>{
            let post = res.data;
            this.setState({userId: post.userId,
                title: post.title,
                body : post.body
            });
        });
    }

    updatePost = (e) => {
        e.preventDefault();
        let post = {userId: this.state.userId, title: this.state.title, body: this.state.body};
        console.log('post => ' + JSON.stringify(post));
        console.log('id => ' + JSON.stringify(this.state.id));

        
        PostService.updatePost(post, this.state.id).then( res => {
            
            this.props.history.push('/posts');
        });
    }
    
    changeuserIdHandler= (event) => {
        this.setState({userId: event.target.value});
    }

    changeTitleHandler= (event) => {
        this.setState({title: event.target.value});
    }

    changeBodyHandler= (event) => {
        this.setState({body: event.target.value});
    }

    cancel(){
        this.props.history.push('/posts');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Post</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> User ID: </label>
                                            <input placeholder="User ID" name="userId" className="form-control" 
                                                value={this.state.userId} onChange={this.changeuserIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Title: </label>
                                            <input placeholder="Title" name="title" className="form-control" 
                                                value={this.state.title} onChange={this.changeTitleHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Body: </label>
                                            <input placeholder="Email Address" name="body" className="form-control" 
                                                value={this.state.body} onChange={this.changeBodyHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updatePost}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdatePostComponent
