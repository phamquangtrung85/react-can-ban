import React from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';
class ComponentClass extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: 'Trung', age: 18, province: 'An giang' },
      { id: 2, name: 'Quang', age: 27, province: 'An giang' },
      { id: 3, name: 'Phạm', age: 36, province: 'An giang' },
    ],
  };
  handleAddUser = (objUser) => {
    console.log(objUser);
    //thêm dữ liệu vào đầu mảng trước đó
    this.setState({ listUsers: [objUser, ...this.state.listUsers] });
    // alert(true);
  };
  handleDeleteUser = (userId) => {
    //sao chép danh sách
    let listUsersClone = [...this.state.listUsers];
    //lọc danh sách không có userId
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);
    //cập nhật listUsers
    this.setState({ listUsers: listUsersClone });
  };
  //event là phải gõ đúng như sau vì react định nghĩa rồi

  // handleClick = (event) => {
  //   console.log('Click me nhe!', event);
  //   console.log(
  //     'my sex is ',
  //     this.state.sex,
  //     'I am from ',
  //     this.state.province,
  //     'my zip code of province is',
  //     this.state.postcode
  //   );
  // merge state
  //   this.setState({
  //     sex: 'Female',
  //     postcode: Math.floor(Math.random() * 100) + 1,
  //   });
  // };
  // handleOnMouseOver(event) {
  //   console.log('Mouse Over me ne!', event);
  //   console.log(
  //     'my sex is ',
  //     this.state.sex,
  //     'I am from ',
  //     this.state.province,
  //     'my zip code of province is',
  //     this.state.postcode
  //   );
  //   this.setState({ sex: 'Male' });
  //   this.setState({ postcode: Math.floor(Math.random() * 100) + 1 });
  // console.log(event.pageX);
  // console.log(event.screenX);
  // }

  //jsx
  render() {
    //tạo biến java script
    // const myarr = ['Vinh Long', 'Can Tho'];
    return (
      <>
        DRY là Don't repeat yourself, Giảm sự lặp lại code
        <AddUserInfor handleAddUser={this.handleAddUser} />
        <DisplayInfor
          listUsers={this.state.listUsers}
          handleDeleteUser={this.handleDeleteUser}
        />
        {/* <DisplayInfor sex='Famale' province='Dong Thap' postcode='200' /> */}
        {/*dùng biến, và đặt trong cập ngoặc móc để truyền được nhiều dạng dữ liệu như số, chuỗi, mảng, đối tượng*/}
        {/* <DisplayInfor sex={'Male'} province={myarr} postcode={'500'} /> */}
        {/* <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me nhe!
        </button>
        <button onMouseOver={(event) => this.handleOnMouseOver(event)}>
          Mouse Over me ne!
        </button> */}
      </>
    );
  }
}
export default ComponentClass;
