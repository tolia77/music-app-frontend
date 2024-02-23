"use client";
import {createArtist} from "@/services/proxyApi/artists";
import {useState} from "react";

export default function ArtistsCreate() {
    const [name, setName] = useState('');
    const [image, setImage] = useState();
    function handleChangeName(e) {
        setName(e.target.value);
    }
    function handleChangeImage(e) {
        setImage(e.target.files[0]);
    }
    function handleSubmit(e) {
        e.preventDefault();
        createArtist(name, image);

    }
    return (
        <>
            <h1>Create artist</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" onChange={handleChangeName} required maxLength="32" />
                <br/>
                <label htmlFor="image">Image</label>
                <input type="file" onChange={handleChangeImage}/>
                <br/>
                <button type="submit">Create</button>
            </form>
        </>
    )
}