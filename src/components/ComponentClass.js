import React from 'react';

class ComponentClass extends React.Component {
  //state là phải gõ đúng như sau vì react định nghĩa rồi
  state = {
    sex: 'male',
    province: 'An giang',
    postcode: 200,
  };
  //event là phải gõ đúng như sau vì react định nghĩa rồi

  handleClick = (event) => {
    console.log('Click me nhe!', event);
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
  };
  handleOnMouseOver(event) {
    console.log('Mouse Over me ne!', event);
    console.log(
      'my sex is ',
      this.state.sex,
      'I am from ',
      this.state.province,
      'my zip code of province is',
      this.state.postcode
    );
    this.setState({ sex: 'Male' });
    this.setState({ postcode: Math.floor(Math.random() * 100) + 1 });
    // console.log(event.pageX);
    // console.log(event.screenX);
  }
  handleOnChangeInput = (event) => {
    this.setState({
      sex: event.target.value,
    });
    // alert('ok OnChangeInput');
    // console.log('Xem tất cả thuộc tính của event tên OnChange, ', event);
    // console.log(event.target.value);
  };
  /**
   * @param {Event} event Đối tượng sự kiện.
   */
  handleOnSubmit = (event) => {
    event.preventDefault();
    //alert('ok OnSubmit');
  };
  //jsx
  render() {
    return (
      <div>
        my sex is {this.state.sex}
        <form
          onSubmit={(event) => {
            this.handleOnSubmit(event);
          }}
        >
          <input
            typ='text'
            onChange={(event) => this.handleOnChangeInput(event)}
          ></input>
          <button type='submit'>Submit</button>
        </form>
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me nhe!
        </button>
        <button onMouseOver={(event) => this.handleOnMouseOver(event)}>
          Mouse Over me ne!
        </button>
      </div>
    );
  }
}
export default ComponentClass;
