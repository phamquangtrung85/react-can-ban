import React, { useState, useEffect } from 'react';

export default function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Effect này chỉ chạy một lần sau lần render đầu tiên (do dependencies là [])
    const fetchUser = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]); // Effect này sẽ chạy lại khi userId thay đổi

  if (loading) return <p>Đang tải thông tin người dùng...</p>;
  if (error) return <p>Lỗi: {error.message}</p>;
  if (!user) return null; // Trường hợp không tìm thấy user hoặc chưa tải xong

  return (
    <div>
      <h2>Thông tin người dùng</h2>
      <p>Tên: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Điện thoại: {user.phone}</p>
    </div>
  );
}
