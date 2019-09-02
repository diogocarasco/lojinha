import React, { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Provider } from '../common/SessionContext'

import Header from '../containers/Header'
import Home from '../views/Home'
import Login from '../views/Login'
import Produtos from '../views/Produtos'
import Dashboard from '../views/Dashboard'

const App = () => {

    const [session, setSession] = useState({ usuarioLogado: 'Diogo' })

    return (
        <Provider value={{
            ...session,
            update: (obj) => {
                setSession({
                    ...session,
                    ...obj
                })
            }
        }}>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/produtos' component={Produtos} />
                    <Route exact path='/dashboard' component={Dashboard} />
                </div>
            </BrowserRouter>
        </Provider>
    )

}

export default App