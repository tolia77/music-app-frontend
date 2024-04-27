import {useState} from "react";
import {updateUserRequest} from "../../services/users";
import {useAuth} from "../../hooks/auth";

export default function UserEdit() {
    const [name, setName] = useState("");
    const auth = useAuth();
    function handleSubmit(e) {
        e.preventDefault();
        let res = updateUserRequest(auth.token, {
            name: name
        })
    }
    return(
        <div id="edit-user">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input id="name" value={name} onChange={(e) => setName(e.target.value)}/>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}