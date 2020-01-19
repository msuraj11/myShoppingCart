import React, { Component } from 'react';
import { connect } from 'react-redux'; //to connect react&redux
import * as cartAction from '../actions/cartAction';

class Cart extends Component {
    constructor() {
        super();
        this.state = {
            cartList: []
        }

    }


    componentDidMount() {
        console.log("in did mount of cart.js");
        this.setState({ cartList: this.props.cart });
    }

    /*  comoponentWillReceiveProps becomes important when
        there is change in data because of its own component */
    componentWillReceiveProps(nextProps) {
        console.log('willreceiveprops of cart.js');
        this.setState({ cartList: nextProps.cart });
    }                                                       

    removeToCart = (item) => {
        this.props.actionForDelete(item.id);
    };
    
    emptyCart = () => {
        console.log("empty cart of cart js")
        this.props.actionForEmpty();
    };

    render() {
        console.log("render of cart.js" )
        return (
            <div>
                <p>No of items present in the cart : {this.state.cartList.length} </p>
                <table className="table table-striped" >
                    <thead className="thead-dark">

                        <tr>
                            <th>ProductId</th>
                            <th>ProductName</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.cartList.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td><b>{item.id}</b></td>
                                    <td><b>{item.name}</b></td>
                                    <td><button className="btn btn-outline-danger" onClick={() => this.removeToCart(item)}>Remove From Cart</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <button className="btn btn-outline-danger"onClick={this.emptyCart}>Empty Cart</button>
            </div>
        )
    }
}

//to access from store
const mapStateToProps = (state) => {
    console.log("map state to props of cart.js")
    return {
        cart: state.cart.cartItems
    }
};

const mapDispatchToProps = {
    actionForDelete: cartAction.removeToCart,
    actionForEmpty: cartAction.emptyCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);