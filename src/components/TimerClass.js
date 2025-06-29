import React from 'react';

class TimerClass extends React.Component {
  //đối tượng js
  state1234 = {
    name: 'trung',
    age: 43,
    job: 'teacher',
  };
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.intervalId = null; // Khởi tạo biến để lưu ID interval
  }

  componentDidMount() {
    // Thiết lập interval khi component mount
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
      console.log('Class Đếm: ', this.state.count + 1);
    }, 1000);
    console.log('Class Thiết lập Interval ID:', this.intervalId);
  }

  componentWillUnmount() {
    // Dọn dẹp interval khi component unmount
    clearInterval(this.intervalId);
    console.log('Class Đã xóa Interval ID:', this.intervalId);
  }

  render() {
    return (
      <div>
        <p>my name is {this.state1234.name}</p>
        <h2>Đồng hồ đếm (Class Component)</h2>
        <p>Số giây: {this.state.count}</p>
      </div>
    );
  }
}

export default TimerClass;
