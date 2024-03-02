import React from 'react';
import Output from './Output';
import './App.css';
import CatTypes from './CatTypes';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      disabled: false,
    };
    this.myRf = React.createRef()

  }


  handleFocusInput = () => {
    this.myRf.current.focus();
  };

  handleChange = (e) => {
    this.setState({
      inputText: e.target.value
    });

    if (e.target.value.includes('реакт')) {
      this.setState({ inputText: e.target.value, disabled: true });
    } else {
      this.setState({ inputText: e.target.value, disabled: false });
    }

  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ inputText: '' });
  };


  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate() {
    console.log('componentDiUpdate')

  }

  render() {
    return (
      < >
        <form className='form' onSubmit={this.handleSubmit} >
          <input
            ref={this.myRf}
            type="text"
            value={this.state.inputText}
            onChange={this.handleChange}
          />

          <button
           type="submit"
           disabled={this.state.disabled}
           > 
           Отправить</button>
          <button onClick={this.handleFocusInput} type="button">Кнопка для фокуса</button>
        </form>
        <Output inputText={this.state.inputText} />
        <CatTypes/>
      </>
      
    );
  }

}
export default App;
