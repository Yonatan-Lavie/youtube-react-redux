import {LoginForm} from '../components/LoginForm';
import Container from 'react-bootstrap/Container'
import { useSelector, useDispatch } from 'react-redux';
import '../css/login.css';

export const Login = () => {
    return (
        <>
        <main className="login-form">
            <LoginForm />
        </main>
      
        </>
    );
}
