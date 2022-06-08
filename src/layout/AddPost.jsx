import React, { useState } from "react";
import { useParams } from 'react-router-dom'

import Required from "../components/Required";
import SinglePost from "../components/SinglePost";

const AddPost = props => {

    const [valid, setValid] = useState(false);
    const [newPost, setNewPost] = useState(undefined);
    const [validations, setValidations] = useState([
        { input: 'nickname', valid: false },
        { input: 'info', valid: false },
    ]);

    var { category, movie } = useParams();

    function checkForm() {
        setValid(validations.map(inp => inp.valid).reduce((resultado, valido) => resultado && valido))
    }

    function valRequired(el, state) {
        console.log(el,state);
        validations.forEach(inp => {
            if (inp.input === el)
                inp.valid = state;
        })
        checkForm();
    }

    function onSubmit(e) {
        e.preventDefault();
        const post = {
            name: e.target.nickname.value,
            post: e.target.info.value
        };
        //console.log(post);
        //inserir post
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(post)
        };
        fetch('https://629a16cd7b866a90ec4954ee.mockapi.io/api/v1/categories/'+category+'/movies/'+movie+'/posts', requestOptions)
        .then(response => response.json())
        .then(data => {
            if (!newPost)
                setNewPost(<SinglePost key={data.id} avatar={data.avatar} post={data.post} name={data.name}></SinglePost>)
            else
                setNewPost(<>{newPost}<SinglePost key={data.id} avatar={data.avatar} post={data.post} name={data.name}></SinglePost></>)
        }
        );
        e.target.reset();
    }

    return (
        <>
        {newPost}
        <form onSubmit={e => onSubmit(e)}> 
            <Required id="nickname" name="nickname" label="Nickname" onRequired={valRequired} pattern={/^[a-z0-9]{3,12}$/} error="Tem de indicar nickname (3 a 12 caracteres)" />
            <Required id="info" name="info" label="Info" onRequired={valRequired} pattern={/^[a-z0-9 ]{10,100}$/} error="Tem de indicar a info (10 a 100 caracteres)" />
            <button type="submit" className="btn btn-primary" disabled={!valid}>Add Post</button>
        </form>
        </>
    )

}

export default AddPost;