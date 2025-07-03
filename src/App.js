import logo from './logo.svg';
import './App.scss';
import React, { useState } from 'react';
import {
  Welcome,
  Counter,
  Timer,
  DocumentTitleUpdater,
  UserProfile,
  StateComponent,
} from './components';
import TimerClass from './components/TimerClass';
import ComponentClass from './components/ComponentClass';
function App() {
  // App, ĐÂY LÀ COMPONENT GỐC CỦA ỨNG DỤNG
  const [showTimer, setShowTimer] = useState(true);
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React, Trung
        </a>
        
          <ComponentClass/>
        
      </header>
      {/* <Welcome name='Phạm Quang Trung' />
      <StateComponent />
      <Counter />
      <Timer />
      <UserProfile userId={showTimer} />
      <DocumentTitleUpdater pageTitle={showTimer} />
      <h1>Ứng dụng Demo Unmount</h1>
  */}
      {/* <button onClick={() => setShowTimer(!showTimer)}> */}
        {/*
          + !showTimer thì showTimer là False, vì bắt đầu nò là True, trên html là 'Hiển thị Đồng hồ'.
          + khi tôi nháy vào 'Hiển thị Đồng hồ' thì showTimer là True và trên html là 'Ẩn thị Đồng hồ'.
        */}
        {/* {showTimer ? 'Ẩn Đồng hồ' : 'Hiển thị Đồng hồ'}
      </button>
      showTimer && <Timer />} {/* Chỉ render Timer nếu showTimer là true */}
      {/* <TimerClass /> */}
    </div>
  );
}

export default App;
