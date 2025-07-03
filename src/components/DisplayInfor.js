import React from 'react';
import './DisplayInfor.scss';
import logo1 from './../diuc.jpg';
class DisplayInfor extends React.Component {
  state = { isShow: true };

  handleShowHide = (event) => {
    // alert(true);
    this.setState({ isShow: !this.state.isShow });
  };
  //props, là đối tượng dùng truyền dữ liệu component cha cho component con
  render() {
    const { isShow } = this.state;
    const { listUsers } = this.props;
    // console.log('kiểm tra destruturing ', listUsers);
    // console.table(listUsers);
    //console.log(this.props);
    // destructuring obj/array để tối ưu hóa code truy cập thuộc tính props
    // 3 biết lưu thuộc tính đối tượng props
    //const { sex, province, postcode } = this.props;
    return (
      <div className='display-infor-container'>
        {/* <img src={logo1}/> */}
        <div>
          <span
            onClick={(event) => {
              this.handleShowHide(event);
            }}
          >
            {isShow === true ? 'Hide ' : 'Show '}list user
          </span>
        </div>
        {isShow && (
          <>
            {listUsers.map((user, i) => {
              // console.log('>>> user ', user);
              return (
                <div
                  key={user.id}
                  className={
                    i % 3 === 1 ? 'red' : i % 3 === 2 ? 'green' : 'yellow'
                  }
                >
                  <hr />
                  My name's {user.name}. My old's {user.age}. My province's{' '}
                  {user.province}{' '}
                  <button
                    onClick={() => {
                      this.props.handleDeleteUser(user.id);
                    }}
                  >
                    {' '}
                    Delete{' '}
                  </button>
                </div>
              );
            })}
            {/* gõ tên biến, dùng biến thuộc tính của đối tượng props */}
            {/* my sex is {sex}, my province is {province}, my zip code is {postcode} */}
          </>
        )}
      </div>
    );
  }
}
export default DisplayInfor;
