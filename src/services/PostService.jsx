import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "https://jsonplaceholder.typicode.com/posts";

class PostService {

    getPosts(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createPost(post){
         
        return axios.post(EMPLOYEE_API_BASE_URL, post);
    }

    getPostById(id){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + id);
    }

    updatePost(post, id){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + id, post);
    }

    deletePost(id){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + id);
    }
}

export default new PostService()