import React from 'react';

class ComponentClass extends React.Component {
  //state là phải gõ đúng như sau vì react định nghĩa rồi
  state = {
    sex: 'male',
    province: 'An giang',
    postcode: 200,
  };
  //event là phải gõ đúng như sau vì react định nghĩa rồi
  handleClick(event) {
    console.log(event.target);
    console.log(
      'my sex is ',
      this.state.sex,
      'I am from ',
      this.state.province,
      'my zip code of province is',
      this.state.postcode
    );
    // merge state
    this.setState({
      sex: 'Female',
      postcode: Math.floor(Math.random() * 100) + 1,
    });
  }
  handleOnMouseOver(event) {
    console.log(event);
    console.log(
      'my sex is ',
      this.state.sex,
      'I am from ',
      this.state.province,
      'my zip code of province is',
      this.state.postcode
    );
    this.setState({ sex: 'Female' });
    this.setState({ postcode: Math.floor(Math.random() * 100) + 1 });
    // console.log(event.pageX);
    // console.log(event.screenX);
  }
  //jsx
  render() {
    return (
      <div>
        my sex is {this.state.sex}
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          click me nhe!
        </button>
        <button onMouseOver={(event) => this.handleOnMouseOver(event)}>
          Mouse Over me nhe!
        </button>
      </div>
    );
  }
}
export default ComponentClass;
