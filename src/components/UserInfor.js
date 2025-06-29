import React from 'react';
class UserInfor extends React.Component {
  //state là phải gõ đúng như sau vì react định nghĩa rồi
  state = {
    sex: 'Male',
    province: 'An giang',
    postcode: 200,
  };
  /**
   * @param {Event} event Đối tượng sự kiện.
   */
  handleOnSubmit = (event) => {
    event.preventDefault();
    //alert('ok OnSubmit');
  };
  handleOnChangeInput = (event) => {
    this.setState({
      sex: event.target.value,
    });
    // alert('ok OnChangeInput');
    // console.log('Xem tất cả thuộc tính của event tên OnChange, ', event);
    // console.log(event.target.value);
  };
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
            value={this.state.sex}
            type='text'
            onChange={(event) => this.handleOnChangeInput(event)}
          ></input>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}
export default UserInfor;
