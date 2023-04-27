    import React from "react";
    import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
    import Home from './pages/Home/Home'
    import Tasks from './pages/Tasks/index'
    const RoutesR: React.FC = () =>{
        return (
            <Router>
                <Routes>
                    <Route exact path="/"/><Home/><Route/>
                    <Route path='tarefas' element={<Tasks/>} />
                </Routes>
            </Router>
        );
    }

    export default RoutesR