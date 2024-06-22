// src/App.js
import React, { useState } from 'react';
import Header from './components/header';
import TaskInput from './components/taskinput';
import TaskList from './components/tasklist';


const App = () => {
  const [showTaskInput, setShowTaskInput] = useState(false);

  const toggleTaskInput = () => {
    setShowTaskInput(!showTaskInput);
  };

  return (
    <div>
    
             <Header toggleTaskInput={toggleTaskInput} />
      {showTaskInput && <TaskInput toggleTaskInput={toggleTaskInput} />}
      <TaskList />
    </div>
  );
};

export default App;
