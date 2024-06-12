import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { NavBar } from './../components/NavBar.jsx';
import { App } from '../App.jsx';
import { CreateContactPage } from '../Pages/CreateContactPage';
import { EditContactPage } from '../Pages/EditContactPage';

export const Router = ({ children }) => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/create" element={<CreateContactPage />} />
                <Route path="/edit/:id" element={<EditContactPage />} />
            </Routes>
            {children}
        </BrowserRouter>
    );
};

Router.propTypes = {
    children: PropTypes.node,
};