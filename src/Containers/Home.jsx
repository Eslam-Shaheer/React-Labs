import React from 'react';
import Products from '../Components/Products';

class Home extends React.Component {
    constructor(props){
        super(props)
        console.log("Parent constructor")
        this.state = {
            products: [
              { Name: "Iphone", Price: 12000, Quantity: 10 },
            
            ],
            toggle:false
          };
          
    }
    static getDerivedStateFromProps(){
        console.log('parent componentWillReceiveProps')
        return true
    }
    componentDidMount(){
        console.log('parent componentDidMount')
    }
    shouldComponentUpdate(prevProps, prevState){
        console.log('parent shouldComponentUpdate')
        if(prevState !== this.state){
            return true
        }
        else{
            return false
        }
        
    }
    componentDidUpdate(prevProps, prevState){
        console.log('parent componentDidUpdate')
    }
   
    
    
      increaseQuantity(index) {
        const newProducts = this.state.products.slice();
        newProducts[index].Quantity++;
        this.setState({ newProducts });
      }
      decreaseQuantity(index) {
        const newProducts = this.state.products.slice();
        newProducts[index].Quantity--;
        this.setState({ newProducts });
      }
      changeName(event, index) {
        const newProducts = this.state.products.slice();
        newProducts[index].Name = event.target.value;
        this.setState({ newProducts });
      }
      toggle(){
        
          this.setState({toggle: !this.state.toggle})
         
      }

    render() { 
        console.log('parent render')
        return <div >
            <div className="w-50 m-auto my-4">
            <button className="btn btn-info w-100" onClick={()=>this.toggle()}>Toggle</button>
            </div>
           
            {
                this.state.toggle&& this.state.products.map((elem, index) => {
                    return (
                      <Products
                        Name={elem.Name}
                        Price={elem.Price}
                        Quantity={elem.Quantity}
                        increase={() => this.increaseQuantity(index)}
                        decrease={() => this.decreaseQuantity(index)}
                        change={(event) => this.changeName(event, index)}
                        key={Date.now()}
                      />
                    );
                  })
                  
            }
            {
                !this.state.toggle&& <div className="alert-danger text-center">There is no Product</div>
            }
          
            
           
        </div>;
    }
}
 
export default Home;