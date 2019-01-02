import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
const ConcurrentMode = React.unstable_ConcurrentMode;

// function Item({children}){
//   return <div>{children}</div>
// }
// export default class App extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {data:[1,2,3]}
//   }
//   square = () =>{
//       this.setState((preState) => ({data:preState.data.map(v => v*v)}))
//   }
//   render(){
//       return ([
//       <button onClick={this.square}>平方</button>,
//       ...this.state.data.map((el,idx) => <Item key={idx}>{el}</Item>)
//       ])
//   }
// }
ReactDOM.render(
< ConcurrentMode > 
<App />
</ConcurrentMode>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
