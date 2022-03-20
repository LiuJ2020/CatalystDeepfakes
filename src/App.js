import './App.css';
import NameForm from './NameForm.js';
import CurrentName from './CurrentName.js';
import React from "react";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {names: ["Jacob", "Cayla", "Matthew", "Michael"],
                        nameIndex: -1};
    }

    setNameIndex(nameIndex) {
        this.state = {names: this.state.names, nameIndex: nameIndex};
    }

    addName(name) {
        const names = this.state.names;
        names.concat([name]);
        this.state = {names: names, nameIndex: this.state.nameIndex};
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
        this.state = {names: names, nameIndex: this.state.nameIndex};
    }

    getName() {
        if (this.state.nameIndex === -1) {
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
                {this.state.names.map((name) => (<CurrentName name={name} removeName={this.removeName}></CurrentName>))}
                <NameForm addName={this.addName}></NameForm>
                <button onClick={this.randomizeName}>
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
