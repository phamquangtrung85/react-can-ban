import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0); // Khởi tạo state 'count' với giá trị 0

  return (
    <div>
     {/* 
     + chèn biến state ở vị trí cần dùng trong ứng dụng count 
     + dùng hàm setCount trong các sự kiện của html
     */}
      <p>Bạn đã click {count} lần</p>
      <button onClick={() => setCount(count + 1)}>
        Click vào đây
      </button>
    </div>
  );
}

