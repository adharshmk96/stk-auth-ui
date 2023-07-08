import {Icon} from '@iconify-icon/solid'
import HomeIcon from '../components/home/icons'
import { useTitle } from '../context/title';
import { createEffect } from 'solid-js';

const Login = () => {
    const [title, setTitle] = useTitle();

    createEffect(() => {
        setTitle("Login");
    })

    return (
        <div>
            <HomeIcon icon="carbon:home"  />
        <h1 class="text-xl">{title()}</h1>
        </div>
    )
}

export default Login