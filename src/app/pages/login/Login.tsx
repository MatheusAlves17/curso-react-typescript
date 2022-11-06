import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/pagina-inicial')
    }

    return (
        <>
            <h1>Login</h1>
            
            <button onClick={handleClick}>Voltar dashboard</button>
        </>
    );
}