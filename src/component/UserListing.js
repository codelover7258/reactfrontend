import React from 'react'
import axios from 'axios'

export const UserListing = () => {
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const resp = await axios.get(`http://127.0.0.1:8000/api/students/`);
        try {
            console.log(resp.data, "data")
            setUsers(resp.data)
        } catch (error) {
            console.log(error, 'error');
        }
    }

    return (
        <table border={1}  cellSpacing={0}>
            <thead>
                <tr>
                    
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
            {
                users.map(user=> {
                    return (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.stud_name}</td>
                            <td>{user.stud_email}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}
