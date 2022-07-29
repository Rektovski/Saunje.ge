import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import ErrorPage from "./main/components/errorPage/ErrorPage";
import Layout from "./main/components/Layout";
import {useEffect, useState} from "react";
import ThemeContext from "./main/context/ThemeContext";
import Body from "./main/components/mainComponents/Body";
import UserContext from "./main/context/UserContext";
import LoginPage from "./main/components/login/LoginPage";
import "./App.css";
import LanguageContext from "./main/context/LanguageContext";
import ServerUrlContext from "./main/context/ServerUrlContext";

function App() {
    const [theme, setTheme] = useState('light');
    const [user, setUser] = useState(localStorage.getItem('password'));
    const [language, setLanguage] = useState('ka');
    const [serverUrl, setServerUrl] = useState('http://localhost:8080/api');

    useEffect(()=>{
        if(user){
            setTimeout(()=>{
                localStorage.clear('token');
                setUser(localStorage.getItem('password'));
            },300000);
        }
    },[user])

    return (
            <div className={'app'}>
                <ServerUrlContext.Provider value={{serverUrl, setServerUrl}}>
                    <LanguageContext.Provider value={{language, setLanguage}}>
                        <UserContext.Provider value={{user, setUser}}>
                            <ThemeContext.Provider value={{theme, setTheme}}>
                                <BrowserRouter>
                                    <Routes>
                                        <Route path={'/'} element={<Layout/>}>
                                            <Route path={'/'} element={<Body/>}></Route>
                                        </Route>
                                        <Route path={'/login'} element={<LoginPage/>}></Route>
                                        <Route path={'*'} element={<ErrorPage/>}></Route>
                                    </Routes>
                                </BrowserRouter>
                            </ThemeContext.Provider>
                        </UserContext.Provider>
                    </LanguageContext.Provider>
                </ServerUrlContext.Provider>
            </div>
    );
}

export default App;
