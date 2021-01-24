import React, { Component } from 'react'
import PostService from '../services/PostService';
import axios from 'axios';

class CreatePostComponent extends Component {
    data=[];
    constructor(props) {
        super(props)
        this.state = {
            // step 2
            id: this.props.match.params.id,
            userId: '',
            title: '',
            body: ''
        }
        this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeBodyHandler = this.changeBodyHandler.bind(this);
        this.saveOrUpdateBody = this.saveOrUpdateBody.bind(this);
    }

     
    componentDidMount(){
        
        
        if(this.state.id === '_add'){
            axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            this.data = response.data;
          
            this.setState({ id: this.data.length + 1 });
        })
         
        }else{
            PostService.getPostById(this.state.id).then( (res) =>{
                let post = res.data;
                this.setState({userId: post.userId,
                    title: post.title,
                    body : post.body
                });
            });
        }        
    }
    saveOrUpdateBody = (e) => {
        e.preventDefault();
        let post = {Id: this.state.id, userId: this.state.userId, title: this.state.title, body: this.state.body};
        console.log('post => ' + JSON.stringify(post));

         
        if(this.state.id === this.data.length + 1){
            PostService.createPost(post).then(res =>{
                this.props.history.push('/posts');
            });
        }else{
            PostService.updatePost(post, this.state.id).then( res => {
                this.props.history.push('/posts');
            });
        }
    }
    
    changeUserIdHandler= (event) => {
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

    getTitle(){
        if(this.state.id === this.data.length + 1){
            return <h3 className="text-center">Add Post</h3>
        }else{
            return <h3 className="text-center">Update Post</h3>
        }
    }
    render() {
        return (
            
                <div className="row">
                   
                            <div className = "card col-md-6 offset-md-3 offset-md-3 mt-5 mb-5 p-4">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            
                                            <input placeholder="User ID" name="userId" className="form-control" 
                                                value={this.state.userId} onChange={this.changeUserIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            
                                            <input placeholder="Title" name="title" className="form-control" 
                                                value={this.state.title} onChange={this.changeTitleHandler}/>
                                        </div>
                                        <div className = "form-group">
                                             
                                                <textarea placeholder="Content" name="body" className="form-control" value={this.state.body} onChange={this.changeBodyHandler}></textarea>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateBody}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                       
                            </div>
        )
    }
}

export default CreatePostComponent
