import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getUserRequest} from "../../services/users";
import User from "../../components/User";
import {useAuth} from "../../hooks/auth";

export default function UserShow({params}) {
    let {userId} = useParams();
    let auth = useAuth();
    const [user, setUser] = useState({});
    useEffect(() => {
        async function get(id) {
            const result = await getUserRequest(id, auth.token);
            setUser(result);
        }
        get(userId);
    }, []);
    return(
        <div>
            <User user={user}/>
        </div>
    )
}