import React from 'react';
import logo from './logo.svg';
import './App.css';
import  {IdeaComponent} from './Idea'

class App extends React.Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)

    this.state = {
     ideas:[
      {
        name:'Idea1',
        topic:'Idea1',
        votes:2
       }, {
        name:'Idea2',
        topic:'Idea2',
        votes:2
       }
     ]
    }
  }
  handleChange = (e) => {
    this.setState({ item: e.target.value })
  }
  handleAdd = () => {
    let list = this.state.list;
    list.push(this.state.item);
    this.setState({ list })
  }

 setIdeas=(newIdeas)=>{
   this.setState({
     ideas: newIdeas
   });
  }

  render() {
    return (
      <div className="App">
        <IdeaComponent setIdeas={this.setIdeas} ideas={this.state.ideas}></IdeaComponent>
      </div>
    );
  }
}

export default App;
