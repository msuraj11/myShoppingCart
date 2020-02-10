import React, { Component } from 'react';
import Product from './Product';
import axios from 'axios';
import { connect } from 'react-redux'; //to connect react&redux
import * as cartAction from '../actions/cartAction';


class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            addedlist: [],
            imageData: [],
            updatedList: [],
            searchBoxValue: ''
        }
    }
    componentDidMount() {
        axios.get('https://nodesense.github.io/api/products.json').then( response => {
            const responseData = response && response.data;
            for (var i = 0; i < responseData.length; i++) {
                Object.assign(responseData[i], {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkm_GGgo9eDdNNTKH8Oogr_JEA1-kb3CCV_q_Suqu0n-q6h10F'});
            }
            this.setState({ list: responseData });
        });
        this.setState({ addedlist: this.props.addlist });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ addedlist: nextProps.addlist });
    }


    cartSelected = (productSelected) => {
        this.props.actions({...productSelected, uniqueId: Math.floor(Math.random() * 1000)});
        alert(`${productSelected.name} added to your wish-list`);
    }


    handleInputChanged = (event) => {
        let itemSearch = event.target.value;
        let { list } = this.state;

        list = list.filter((item) => {
            var k = item.name.toLowerCase().search(itemSearch.toLowerCase()) !== -1;
            return k;
        });
        this.setState({ updatedList: list, searchBoxValue: event.target.value});
    }


    render() {
        let arr1;
        if (this.state.updatedList.length === 0 && this.state.searchBoxValue === '') {
            arr1 = this.state.list;
            arr1.push(...this.state.addedlist);
        }
        else if (this.state.updatedList.length === 0 && this.state.searchBoxValue !== '') {
            arr1 = "Sorry..... Out of Stock or Item not found -__-";
        }
        else {
            arr1 = this.state.updatedList;
        }

        return (
            <div>
               <Product
                    list={arr1}
                    handleInputChanged={this.handleInputChanged}
                    cartSelected={this.cartSelected}
                />
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        addlist: state.cart.productItems
    }
};

const mapDispatchToProps = {
    actions: cartAction.addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);