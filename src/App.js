import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';

//by extending into Component, we get not only render and state, also get lifecycle methods like componentDidMount() 
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            monsters: [
                {
                    name: 'Frankenstein',
                    id: 'asdf'
                },
                {
                    name: 'Warewolf',
                    id: 'asdfasdf'
                },
                {
                    name: 'Dracula',
                    id: 'fdsa'
                }
            ],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                return res.json()
            })
            .then(users => {
                this.setState((prevState) => {
                    return {
                        monsters: [
                            ...prevState.monsters,
                            ...users
                        ]
                    }
                })
            })
    }

    //unique trait of arrow funct. allow you to set the scope of the function to bind the "this" inside it to the class this arrow function lives on. This replaces having to bind the function as a class method in the class constructor method above.
    handleTyping = (e) => {
        console.log(e.target.value);
        this.setState((prevState) => {
            console.log(`old state: ${prevState.searchField}`);
            return { searchField: e.target.value }
        }, () => console.log(`new state: ${this.state.searchField}`));
    }

    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

        return (
            <div className="App">
                <h1>Robots Rolodex</h1>
                <SearchBox placeholder='search for robots' handleTyping={this.handleTyping} />
                <CardList monsters={this.state.searchField ? filteredMonsters : this.state.monsters} />
            </div>
        );
    }
}

export default App;