import {getArtist} from "@/services/artists";
import {notFound} from "next/navigation";

export default async function Artist({ params }) {
    let artist;
    try {
        artist = await getArtist(params.id);
    }
    catch (e) {
        if(e.message === "Not Found") notFound();
    }
    return(
        <>
            <h1>{artist.name}</h1>
            {artist.avatar_path && <img src={artist.avatar_path} alt="avatar"/>}
        </>
    )
}