import './App.css';
import NameForm from './NameForm.js';
import CurrentName from './CurrentName.js';
import React from "react";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {names: [],
                        nameIndex: -1};

        this.setNameIndex = this.setNameIndex.bind(this);
        this.randomizeName = this.randomizeName.bind(this);
        this.removeName = this.removeName.bind(this);
        this.getName = this.getName.bind(this);
        this.addName = this.addName.bind(this);
    }

    setNameIndex(nameIndex) {
        this.setState({names: this.state.names, nameIndex: nameIndex});
    }

    addName(name) {
        const names = this.state.names;
        names.push([name]);
        this.setState({names: names, nameIndex: this.state.nameIndex});
    }

    removeName(name) {
        const names = this.state.names;
        let index = -1;
        for (let i = 0; i < names.length; i++) {
            if (name === names[i]) {
                index = i;
            }
        }
        if (index !== -1) {
            names.splice(index, index);
        }
        if (index === 0) {
            names.shift();
        }
        this.setState({names: names, nameIndex: this.state.nameIndex});
    }

    getName() {
        if (this.state.nameIndex >= this.state.names.length || this.state.nameIndex < 0) {
            return "";
        }
        return this.state.names[this.state.nameIndex];
    }

    randomizeName() {
        let newIndex = Math.floor(Math.random() * this.state.names.length);
        while (newIndex === this.state.nameIndex) {
            newIndex = Math.floor(Math.random() * this.state.names.length);
        }
        this.setNameIndex(newIndex);
    }

    render() {
        return (
            <div className="App">
                <h1>
                    Randomly Select a Group Decision Maker!
                </h1>
                {this.state.names.map((name) => (<CurrentName name={name} removeName={this.removeName}></CurrentName>))}
                <NameForm addName={this.addName}></NameForm>
                <button onClick={this.randomizeName} style={{marginTop: '25px'}}>
                    Find the decision maker!
                </button>
                <p>
                    The Decision Maker: {this.getName()}
                </p>
            </div>
        );
    }


}

export default App;
