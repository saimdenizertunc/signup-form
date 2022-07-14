
import './App.css';

import Signup from './components/Signup';

function App() {
  return (
    <div className="app">
      <nav>
      <div className="logo">SD DIGITAL</div>
      <div className="navigation">
        <ul><a href="#">Home</a></ul>
        <ul><a href="#">Contact</a></ul>
        </div>
      </nav>
      <div className="container">
      <div className='signup-form'>
      <Signup/>
      </div>
      <div className='right-side'>
        <h2>“We'll put some happy little leaves here and there. ”</h2>
        <h4> - Bob Ross</h4>
      </div>
    </div>
    </div>
  );
}

export default App;
