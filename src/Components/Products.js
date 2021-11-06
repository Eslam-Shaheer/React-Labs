import "./Products.css";
import React from "react";

class products extends React.Component {
  constructor(props) {
    console.log("Child constructor");
    super(props);
    this.state = {};
    console.log("Child Components");
  }
  static getDerivedStateFromProps(nextProps, nextState) {
    console.log("Child componentWillReceiveProps");
    return true;
  }
  componentDidMount() {
    console.log("Child componentDidMount");
  }
  shouldComponentUpdate(prevProps, prevState) {
    console.log("Child shouldComponentUpdate");
    if (prevProps !== this.props) {
      return true;
    } else {
      return false;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Child componentDidUpdate");
  }
  render() {
    return (
      <div>
        <div className="section_our_solution my-5">
          <div className="d-flex">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="our_solution_category">
                <div className="solution_cards_box">
                  <div className="solution_card">
                    <div className="hover_color_bubble"></div>
                    <div className="solu_title my-1">
                      <h3>Name:{this.props.Name}</h3>
                    </div>
                    <div className="solu_description ">
                      <h5 className="my-2">Price:{this.props.Price} </h5>
                      <h5 className="my-2">Quantity:{this.props.Quantity} </h5>
                      <button
                        type="button"
                        className="btn btn-info mx-2 my-5"
                        onClick={this.props.decrease}
                      >
                        -
                      </button>

                      <button
                        type="button"
                        className="btn btn-info mx-2 my-5"
                        onClick={this.props.increase}
                      >
                        +
                      </button>
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        placeholder="Change product name"
                        onChange={this.props.change}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default products;
