import './App.css';


import { BrowserRouter as Router, Route } from 'react-router-dom';

import Registration from './SignUp/registration';
import Get from './SignUp/get';
import Put from './SignUp/put';



function App() {
  return (
    <>
      <Router>
        <div className="main">
          <h2 className="main-header">React Crud Operations</h2>
          <div>
            <Route exact path='/' component={Registration} />
          </div>
          <div style={{ marginTop: 20 }}>
            <Route path='/get' component={Get} />
          </div>

          <Route path='/put' component={Put} />

        </div>
      </Router>

    </>
  );
}

export default App;
