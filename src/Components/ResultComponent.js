import React,{Component} from 'react';

 class Result extends Component {
 
 render(){ 
   const {remarks} = this.props

   return (
    <div className="App">
      <h1>
        {remarks<70 ? <div> Sorry  Mr Saad Ali. Try again</div> : <div> Congratulation  Mr Saad Ali You are passed</div> }
      </h1>

      <b>You Obtain {remarks} Marks from 100</b>
    </div>
  );
}
}

export default Result;
