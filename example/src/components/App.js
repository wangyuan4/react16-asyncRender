import React from 'react';
import ReactDOM from 'react-dom';

import Tab from './Tab';
import Input from './Input';
import Items from './Items';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAsync: true,
      text: '',
      items: [...new Array(5000)].map((_, i) => ({index: i, name: `item:${i}`, value: i}))
    }
  }
  syncUpdate = (value) => {
    ReactDOM.flushSync(() => {
      this.setState(() => ({text: value}));
    });
  }
  tick() {
    this.setState(
      state => ({
        count: state.count + 1,
        items: state.items.map(item => Object.assign({}, item, {name: `item:${item.value + 1}`, value: item.value + 1})),
      }),
      () => {
        this.timerId = setTimeout(() => {
          this.state.isAsync ? this.tick() : ReactDOM.flushSync(() => this.tick());
        }, 100);
      }
    );
  }
  componentDidMount() {
    this.tick();
  }
  componentWillUnmount() {
    if (this.timerId) {
      console.log(this.timerId)
      clearTimeout(this.timerId);
    }
  }
  render() {
    const {isAsync, text, count, items} = this.state;
    return (
      [
        <Tab isAsync={isAsync} onClick={value => this.setState(() => ({isAsync: value, text: ''}))}/>,
        <Input value={text} onChange={this.syncUpdate} />,
        <h3>Rendering {items.length}items as {isAsync ? 'low' : 'sync'} priority</h3>,
        <Items items={items} />
      ]
        
    )
  }
}
