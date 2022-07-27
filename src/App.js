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

function App() {
    const [theme, setTheme] = useState('light');
    const [user, setUser] = useState(localStorage.getItem('password'));

    useEffect(()=>{
        if(user){
            setTimeout(()=>{
                localStorage.clear('token');
                setUser(localStorage.getItem('password'));
            },5000);
            {/*
            1s - 1000(ms)
            1m - 60000(ms)
            5m - 300000(ms)
            */}
        }
    },[user])

    return (
            <div className={'app'}>
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
            </div>
    );
}

export default App;
