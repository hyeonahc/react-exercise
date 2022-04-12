import React from 'react';

class StateClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'maple',
    };
  }

  onClick = () => {
    this.setState({
      name: 'lavender',
    });
  };

  render() {
    return (
      <>
        <p>안녕하세요 저는 {this.state.name}입니다</p>
        <button onClick={this.onClick}>이름을 라벤더로 바꾸기</button>
      </>
    );
  }
}

export default StateClass;
