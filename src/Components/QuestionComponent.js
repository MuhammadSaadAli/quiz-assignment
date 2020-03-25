import React,{Component} from 'react';
import '../App.css';

import Quiz from './QuizComponent'

 class Question extends Component {

    
 
 render(){ 

   return (
    <div className="App">
      <h1> Quiz app </h1>
      
      <Quiz />
    </div>
  );
}
}

export default Question;
