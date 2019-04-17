import React, { Component } from 'react';
import './List.css';
import { Card } from '../Card/Card';

export class List extends Component {
    render() {
        return (
            <div className="Container">
                <ul>
                    <Card />
                </ul>
            </div>
        );
    }
}