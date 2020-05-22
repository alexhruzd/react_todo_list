import React from 'react';

export default class ItemAddForm extends React.Component {
    state = {
        inputText: ''
    };

    onInput = (event) => {
        this.setState({
            inputText: event.target.value
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onItemAdd(this.state.inputText);

        this.setState({
            inputText: ''
        });
    };

    render() {
        return (
            <form
                className="ItemAddForm d-flex"
                onSubmit={this.onSubmit}
            >
                <input
                    required
                    className="form-control mr-3" type="text"
                    placeholder="what are you going to do"
                    onChange={this.onInput}
                    value={this.state.inputText}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary"
                >
                    Add
                </button>
            </form>
        )
    }
}
