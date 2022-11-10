import { useRef } from 'react';
import { Link } from  'react-router-dom';
export const Dashboard = () => {
    const counter = useRef({count: 0}) 
    return (
        <>
            <p>{counter.current.count}</p>
            <h1>Dashboard</h1>
            <button onClick={() => counter.current.count++}>Somar</button>
            <button onClick={() => console.log(counter.current.count)}>Log</button>
            <Link to="/entrar">Login</Link>
            
        </>
    );
}