// import './NameForm.css';
import React from 'react';
import x from './x.png';

class CurrentName extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.props.removeName(this.props.name);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <text>{this.props.name}</text>
                <input type="image" src={x} width={25} height={25}/>
            </form>
        );
    }
}

export default CurrentName;
