import React, { Component } from 'react'

const Context = React.createContext();
export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: "Misker",
                email: "miskerbirhanu@gmail.com",
                phone: "092699"
            },
            {
                id: 2,
                name: "Istifanos",
                email: "isti@gmail.com",
                phone: "092699"
            },
            {
                id: 3,
                name: "Beriso",
                email: "beris@gmail.com",
                phone: "092699"
            },
        ],
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer=Context.Consumer;
