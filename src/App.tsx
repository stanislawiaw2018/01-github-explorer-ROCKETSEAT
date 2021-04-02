
//COMPONENTE DO REACT

//IMPORTAÇÃO DO SCSS
import LoginComponent from './componets/LoginComponent';
import { ReposotoryList } from './componets/ReposotoryList';
import './styles/global.scss';


export function App() {
    // throw new Error('Eita, erroooooo aqui!!!')
    return (
        <div>
            <ReposotoryList />
            {/* <LoginComponent /> */}
        </div>
    )
}