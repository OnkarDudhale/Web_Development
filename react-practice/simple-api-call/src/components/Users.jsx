import { useEffect, useState } from "react"

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
            if (!response.ok) {
                throw new Error("failed to fetch data");
            }
            return response.json();
        })
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false)
            })
    }, []);

    if (loading) return <h2>...Loading</h2>
    if (error) return <h2>Error : {error}</h2>

    return (
        <div>
            <h2>Users list</h2>
            <ol>
                {users.map((user) => (
                    <div key={user.id}>
                        <li>
                            <h2>Name :{user.name}</h2>
                            <h3>Username :{user.username}</h3>
                            <h3>Email :{user.email}</h3></li>
                    </div>
                ))}
            </ol>

        </div>
    )
}

export default Users;