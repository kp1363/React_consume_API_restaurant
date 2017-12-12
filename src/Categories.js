import React from 'react';
import axios from 'axios';


class Categories extends React.Component {
    constructor(props) {
		super(props);
        this.state = {
            categories: {}
        };
        this.getCategories = this.getCategories.bind(this);
    }
    componentDidMount() {
        this.getCategories();
    }
    getCategories() {
        axios.get('https://davids-restaurant.herokuapp.com/categories.json')
        .then(response => {              
            console.log(response);
            this.setState({
                categories: response.data
            })
        }).catch(err => console.log(err))
    }
   render() {
      return (
         <div>
              <div className="bs-component">
              <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#/">Chef Chu&apos;s Restaurant</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>      
                <div className="collapse navbar-collapse"  className="nav-bar-adj" id="navbarColor01">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="#/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                      <a className="nav-link" href="#/categories">Categories</a>
                    </li>
                 </ul>
                 </div>
              </nav>
            </div>


            <div className="row">
            <div className="my-list">
          <div className="col-lg-12">
            <h2>Menu Categories</h2>
          </div>
       
           
        <div className="bs-component">
           
            <ul className="list-group">
            {
            this.state.categories && this.state.categories.length>0 ?
            this.state.categories.map(function (category, i) {
                return (
                <li key={i} className="list-group-item d-flex justify-content-between align-items-center"><a href={'#/categories/item/'+category.short_name}>{category.name} - ({category.short_name})</a></li>
                )
            }.bind(this))
            : null
            }
            </ul>
            </div>
          </div>
          </div>





         </div>
      );
   }
}
export default Categories;