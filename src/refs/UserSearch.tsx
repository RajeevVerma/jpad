
import { useEffect, useRef, useState } from 'react';
const users = [
    {
        name: 'Sarah',
        age: 20
    },
    {
        name: 'Alex',
        age: 20
    },
    {
        name: 'Alex2',
        age: 20
    }
]

const UserSearch: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const [name, setName] = useState('');
    const [user, setUser] = useState<{ name: string, age: number } | undefined>();

    useEffect(() => {
        inputRef.current?.focus();
    }, [])

    const onClick = () => {
        var foundUser = users.find(x => x.name.indexOf(name) > -1);
        setUser(foundUser);
        console.log(foundUser);
    }

    return <div>User Search
        <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={onClick} > Find</button>
        <div>
            {
                user && user.name
            }
            {
                user && user.age
            }
        </div>
    </div>
}

export default UserSearch;