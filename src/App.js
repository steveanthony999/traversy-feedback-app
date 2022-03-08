import React from 'react';

const App = () => {
  const comments = [
    { id: 1, text: 'Comment one' },
    { id: 2, text: 'Comment two' },
    { id: 3, text: 'Comment three' },
  ];
  return (
    <div>
      <h1>Hello from the App Component</h1>
      <h1>Comments ({comments.length})</h1>
      <ul>
        {comments.map((x, index) => (
          <li key={index}>{x.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
