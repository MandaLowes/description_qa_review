import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      description: [],
      rating: [],
      question: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3003/information')
    .then(({data}) => {
      console.log(data)
      this.setState({data: data})
    })
    .catch(error => console.error(error));
  }

  render(){
  return (
    <div className="item_details">
      <div className='description'>

      </div>
      <div className='rating'>

      </div>
      <div className='questions'>

      </div>

    </div>
  )};
}

export default App;
