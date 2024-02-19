import {getJWT} from "@/utils/userSession";

export async function POST(request) {
    let res = await fetch("http://localhost:3000/artists", {
        method: "POST",
        body: await request.formData(),
        headers: {
            'Authorization': await getJWT()
        },
        duplex: 'half'
    });
    if(!res.ok) throw Error(res.statusText);
    return res;
}