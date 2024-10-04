import React from 'react';

const Users = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        next: { revalidate: 60 }, // Optional: Set revalidation time
      });
    const users = await res.json();

    return (
        <ul>
            {users.map((user:{id: number; name: string})=> (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    )
}

export default Users;