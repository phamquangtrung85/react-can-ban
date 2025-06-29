import React from 'react';
export default function State123() {
  //đối tượng js
  const state = {
    name: 'Trung',
    address: 'An giang',
    age: 43,
    class: "IT"
  };
  return <p>my name is {state.name}</p>;
}
