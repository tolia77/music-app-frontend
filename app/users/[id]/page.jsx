import {getUser} from "@/services/users";
export const revalidate = 500;
export default async function User({params}) {

    const user = await getUser(params.id);
    return(
        <h1>{user.name}</h1>
    )
}