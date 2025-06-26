import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Thiết lập một interval
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Trả về một hàm dọn dẹp
    return () => {
      // Hàm này sẽ chạy khi component unmount hoặc khi effect chạy lại khi F5 hoặc biến trong [] đổi, hoặc hiện lại vào App, hoặc chạy lần đầu luôn có khi gắn vào App
      clearInterval(intervalId);
      console.log('Interval đã được xóa!');
    };
  }, []); // Mảng rỗng đảm bảo effect này chỉ thiết lập một lần

  return (
    <div>
      <p>Đồng hồ đếm: {count}</p>
    </div>
  );
}
