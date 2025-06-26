import React, { useState, useEffect } from 'react';

export default function DocumentTitleUpdater({ pageTitle }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Cập nhật tiêu đề tài liệu khi `pageTitle` thay đổi
    document.title = `${pageTitle} - Click: ${counter}`;
    console.log('Tiêu đề trang đã được cập nhật.');
  }, [pageTitle, counter]); // Effect chạy lại khi pageTitle HOẶC counter thay đổi

  return (
    <div>
      <h1>Trang: {pageTitle}</h1>
      <p>Số lần click: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Tăng Click</button>
    </div>
  );
}


