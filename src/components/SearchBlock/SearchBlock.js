import React from 'react';
import './SearchBlock.css';

class SearchBlock extends React.Component {
    state = {
        detectedText: '',
    }

    onInput = (event) => {
        const detectedText = event.target.value;
        this.setState({ detectedText });
        this.props.onSearch(detectedText);
    };

    render() {
        const searchBlockText = 'What are you want to search?'

        return (
            <div className="SearchBlock">
                <input
                    className="form-control mr-3"
                    onChange={this.onInput}
                    type="search"
                    placeholder={searchBlockText}
                />
            </div>
        );
    }
};

export default SearchBlock;