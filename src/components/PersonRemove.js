import React from "react";

import API from "../api";

export default class PersonRemove extends React.Component {
    state = {
        id: ''
    }

    handleChange = (event) => {
        this.setState({id: event.target.value});
    }

    handleSubmit = async event => {
        event.preventDefault();

        const response = await API.delete(`/users/${this.state.id}`);

        console.log(response);
        console.log(response.data);
    }

    render() {
        return (    
            <div>    
                <form onSubmit={this.handleSubmit}>
                    <label>Id:</label>
                    <input type="text" value={this.state.id} onChange={this.handleChange} name="id" />
                    <button type="submit">Remove</button>
                </form>
            </div>
        );
    }
}
