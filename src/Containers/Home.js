import React, { Component } from "react";
import Posts from "../Components/posts";
export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid d-flex">
        <div className="col-lg-3 col-md-2">
          <div className="card text-center mb-2">
            <div className=" col">
              <h5 className="text-center mt-2">My Profile</h5>
              <div className="card text-center">
                <i className="bi bi-person-circle"></i>
              </div>

              <div className="card-body">
                <h5 className="card-title">Eslam Shaheer</h5>
                <p className="card-text">Web develober</p>
                <p className="card-text">Mern stack</p>
                <p className="card-text">Wordpress them developer</p>
              </div>
            </div>
          </div>
          <div className="card-body mb-2">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
            </ul>
          </div>
          <div className="card">
            <div className=" card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-7 col-md-8 ">
          <Posts />
        </div>

        <div className="col-lg-2 col-md-2">
          <div className="card mb-2 text-center">
            <i className="bi bi-person-circle"></i>
            <div className="card-body">
              <h5 className="card-title text-center">Card title</h5>
              <p className="card-text text-center">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card d-flex text-center  mb-2">
            <h6>Friend Request </h6>
            <i className="bi bi-person-circle"></i>
            <div className="card-body">
              <button className="btn btn-primary">YES</button>
              <button className="btn btn-danger">No</button>
            </div>
          </div>
          <div className="card-header mb-2">Featured</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <div className="card-header mb-2">Featured</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
        </div>
      </div>
    );
  }
}
