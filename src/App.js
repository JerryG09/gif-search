import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import './App.css';
const Home = lazy(() => import('./view/home'));
const GifDetail = lazy(() => import('./view/gifDetail'));

function App() {
  return (
    <div className='container'>
      <Router>
        <Suspense
          fallback={
            <div className="center">
              <div className="center_loader">
                <Loader
                  type="Triangle"
                  color="#000B7C"
                  height="200"
                  width="200"
                />
              </div>
            </div>
          }
        >
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/details' component={GifDetail} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
