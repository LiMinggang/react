/**
 * Created by jim on 2017/6/20.
 */

import React from 'react';
import {Link} from 'react-router';

const view = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </div>
    );
};

export {view};