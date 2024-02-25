import React from 'react';
import Output from './Output';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      inputText: '',
    };
  }

  handleChange = (e) => {
    this.setState({ 
      inputText: e.target.value
    });
  }

  handleClear = (e) => {
    e.preventDefault();

    this.setState({
       inputText: '',
      });
  }
  componentDidMount(){
    console.log('componentDidMount')
  }

  componentDidUpdate(){
    console.log('componentDiUpdate')

  }

  render() {
    return (
      <>
      <form >
        <input 
          type="text"
          value={this.state.inputText}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClear} type="submit">Отправить</button>
      </form>
      <Output inputText={this.state.inputText} />
      </>
    );
  }
}

export default App;
