import React, { useState, useEffect } from 'react';
import Departments from './Departments';
import Employees from './Employees';
import { deleteToken, getToken } from './Tools/auth-helper.js';
import { useNavigate } from "react-router-dom";
import { prefixURLBackend } from './Tools/URLs.js';
import './CRUD.css';

export default function CRUD() {
    const navigate = useNavigate();

    const logoutAndGoMain = () => {
        deleteToken();
        navigate("/", { replace: true });
    };

    return (
        <div>
            <ul className='navigationBar'>
                <li>
                    <a href="" onClick={() => logoutAndGoMain()}>Logout</a>
                </li>
            </ul>

            <div className='crudContentDiv'>
                <br/><br/>
                <Departments />
                <br/><br/><br/>
                <Employees />
                <br/><br/>
            </div>
        </div>
    );
}
