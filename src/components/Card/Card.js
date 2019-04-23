import React, { Component } from 'react';
import './Card.css';

export class Card extends Component {
    state = { showInfo: false }

    toggleCard = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    render() {
        const expandedCard = this.state.showInfo ? 'show' : 'hide';
        return (
            <div className={`container ${expandedCard}`} onClick={this.toggleCard}>
                <h3>Gráfica</h3>
            </div>
        )
    }
}