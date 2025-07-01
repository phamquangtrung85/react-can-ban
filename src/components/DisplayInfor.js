import React from 'react';

class DisplayInfor extends React.Component {
  //props, là đối tượng dùng truyền dữ liệu component cha cho component con
  render() {
    const { listUsers } = this.props;
    // console.log('kiểm tra destruturing ', listUsers);

    //console.log(this.props);
    // destructuring obj/array để tối ưu hóa code truy cập thuộc tính props
    // 3 biết lưu thuộc tính đối tượng props
    //const { sex, province, postcode } = this.props;
    return (
      <div>
        <div>
          {listUsers.map((user) => {
            console.log(user);
            return (
              <div key={user.id}>
                my name's {user.name}my old's {user.age}my province's{' '}
                {user.province}
              </div>
            );
          })}
          {/* gõ tên biến, dùng biến thuộc tính của đối tượng props */}
          {/* my sex is {sex}, my province is {province}, my zip code is {postcode} */}
        </div>
      </div>
    );
  }
}
export default DisplayInfor;
