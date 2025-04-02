import React from 'react';
import { services_data } from '../Constant/data';

export const SportsList = () => {
    return (
        <div>
            <h2>Available Sports</h2>
            <ul>
                {services_data[0].available_sports.map((sport, index) => (
                    <li key={index}>
                        <span>{sport.icon}</span> {sport.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};
