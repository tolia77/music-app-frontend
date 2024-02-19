"use client";
import {createArtist} from "@/services/proxyApi/artists";
import {useState} from "react";
import {getJWT} from "@/utils/userSession";

export default function ArtistsCreate() {
    const [name, setName] = useState('');
    const [image, setImage] = useState();
    function handleChangeName(e) {
        setName(e.target.value);
    }
    function handleChangeImage(e) {
        setImage(e.target.files[0]);
        console.log(image);
    }
    function handleSubmit(e) {
        e.preventDefault();
        createArtist(name, image).then((res) => {
            console.log(res);
        })

    }
    return (
        <>
            <h1>Create artist</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" onChange={handleChangeName} required />
                <br/>
                <label htmlFor="image">Image</label>
                <input type="file" onChange={handleChangeImage}/>
                <br/>
                <button type="submit">Create</button>
            </form>
        </>
    )
}