import React from 'react';
class AddUserInfor extends React.Component {
  //state là phải gõ đúng như sau vì react định nghĩa rồi
  state = {
    id: 1,
    name: 'Trung',
    age: 40,
    province: 'Kiêng Giang',
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    //thực hiện function của component cha nhờ props cha truyền function này qua con
    this.props.handleAddUser({
      id: Math.floor(Math.random() * 100 + 1) + '-random',
      name: this.state.name,
      age: this.state.age,
      province: this.state.province,
    });
    //console.log(this.state.name)
    //alert('ok OnSubmit');
  };
  handleOnChange = (event) => {
    // Lấy thuộc tính 'name' và 'value' từ input
    const { name, value } = event.target;
    // Cập nhật state sử dụng [name] để xác định thuộc tính cần thay đổi
    this.setState({
      [name]: value,
    });
  };

  render() {
    const keys = Object.keys(this.state);
    // console.log('>>>tên thuộc tính ',keys[0], keys[1], keys[2]);

    const vals = Object.values(this.state);
    // console.log('>>>giá trị thuộc tính ',vals[0], vals[1], vals[2]);

    return (
      <div>
        My name is {vals[1]}. My province's {vals[3]}. My age's {vals[2]}
        <form
          onSubmit={(event) => {
            this.handleOnSubmit(event);
          }}
        >
          {keys.slice(1).map((nameState, i) => {
            //nameState là dữ liệu phần tử mảng keys
            //i là chỉ số nameState trong mảng keys
            //console.log(i+1);
            const j = i + 1;
            return (
              <div key={j}>
                <label>{keys[j]} </label>
                <input
                  name={keys[j]}
                  value={vals[j]}
                  type='text'
                  onChange={(event) => this.handleOnChange(event)}
                />
              </div>
            );
          })}
          {/* <label>Province </label>
          <input
            name={keys[1]}
            value={vals[1]}
            type='text'
            onChange={(event) => this.handleOnChange(event)}
          />
          <label>Post code </label>
          <input
            name={keys[2]}
            value={vals[2]}
            type='text'
            onChange={(event) => this.handleOnChange(event)}
          /> */}
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}
export default AddUserInfor;
