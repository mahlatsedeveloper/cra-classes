import React from "react";
import axios from "axios";

export default class PersonAdd extends React.Component {
    state = {
        name: ''
    };

    handleChange = (event) => {
        this.setState({name: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const user = {
            name: this.state.name
        };

        axios.post(`https://jsonplaceholder.typicode.com/users`, {user})
        .then(response => {
            console.log(response);
            console.log(response.data);
        });
    }

    render() {
        return (    
            <div>    
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type="text" value={this.state.name} onChange={this.handleChange} name="name" />
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}