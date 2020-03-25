import React,{Component} from 'react';
import '../App.css';
import Result from './ResultComponent'

 export default class Quiz extends Component {

    constructor(props){
        super(props)
        this.state = {
            data:false,
            counter:0,
            remarks:0
        }
        this.nextQuestion = this.nextQuestion.bind(this)
    }
 
    componentDidMount(){
        fetch('https://opentdb.com/api.php?amount=10&category=9&type=multiple')
        .then(res => res.json())
        .then(res =>{ 
            console.log(res)
        this.setState({
            data : res.results,
        })
    }
        )
        
    }

    nextQuestion(e){
     let {data,counter,remarks} = this.state
     let targetValue = e.target.value
     let correctAnswer = data[counter].correct_answer
     console.log( targetValue , 'targetValue')
     console.log( correctAnswer , 'correctAnswer ')

      if(targetValue === correctAnswer){
        this.setState(
         { remarks: remarks + 10,
        counter: counter + 1}
        )
      }
      else {
        this.setState({
          counter: counter + 1
        })
      }

      console.log('Counter -------- ' , counter)
      console.log('remarks -------' , remarks)
}
 

 render(){ 
     let {data,counter,remarks} = this.state
     console.log(data)
    console.log(counter)
    
    if(counter<10 )
{
   if( data ) {
      return (
       
    <div className="App">
      
      <h1>{counter + 1})  {data[counter].question } 
      </h1>
      <br/>
      <button value={data[counter].correct_answer} onClick={this.nextQuestion}>
        {data[counter].correct_answer }
      </button>
      {
        data[counter].incorrect_answers.map(
          (item , key) => <button onClick={this.nextQuestion} value={item} key={key}>{item}</button> 
        )
      }
    </div>
  );
}
 else {
   return <div> please wait </div>
 } 
 }
 else {
  return (<Result remarks={remarks} />)
}
}
}
