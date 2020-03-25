import React,{Component} from 'react';
import './App.css';
import Question from './Components/QuestionComponent'
// import Quiz from './Components/QuizComponent'

 class App extends Component {

  state = {
    start : false
  }

  startQuiz = () => this.setState({start:true})

 render(){ 
   const {start} = this.state
   
   if(start){
    return  <Question />

}

else {

  return (
    <div className="App">
      
      <h1> Welcome To Quiz Web App </h1>
      <p> <strong>Name : </strong> Muhammad Saad Ali </p>
      <p> <strong>Instructor : </strong> Sir Kashif Sulaiman </p>
      <p> <strong>Batch : </strong> EX-MS7 </p>

      <button className='start'  onClick={this.startQuiz} > Start Quiz </button>

    </div>
  );

}

}
}

export default App;
