const message1 = 'Hello world';
const message2 = 'Hello react';

const flag = false;
function getMessage(){
  if (flag){
    return message1;

  }else{
    return message2;
  }
}

ReactDOM.render(
  <div>
    <h1>{getMessage()}</h1>
    <p>react + redux</p>
  </div>,
  document.getElementById('root')
);
