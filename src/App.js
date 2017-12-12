import React from 'react';
import './app.css';

class App extends React.Component {
   render() {
      return (

       <div className="row">
       
          <div className="container">  
          
            <div className="jumbotron"> 
              <h1  className="display-3">Welcome to Chef Chu&apos;s Restaurant</h1>
              <p className="lead">The Year of the Dragon is approaching — happy Spring festival! As one of the oldest cuisines in history, Chinese food is deep-rooted in symbolic traditions. Long noodles represent a long life, for example, while dumplings shaped like gold nuggets stand for prosperity and fortune.</p>
              <hr className="my-4" />
              <p>Explore diffrent categories to starve you HUNGER!</p>
              <p className="lead">        
              <a href="#/categories" className="btn btn-primary btn-lg">Categories</a>
              </p>
            </div>
          </div>
        </div>
       
      
    
    );

   }
}
export default App;