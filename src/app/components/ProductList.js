import React, { Component } from 'react';
import Product from './Product';
import axios from 'axios';
import { connect } from 'react-redux'; //to connect react&redux
//import { bindActionCreators } from 'redux'; //to connect all events
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
        // this.getData().then(response => {
        //     console.log("from component did mount of productlist.js", response);
        //     this.setState(
        //         {
        //             list: response.data,
        //             imageData: images
        //         }
        //     );
        //     for (var i = 0; i < this.state.list.length; i++) {
        //         Object.assign(this.state.list[i], this.state.imageData[i]);
        //     }
        //     this.setState({ list: this.state.list });
        //     // this.props.actions.jsonData(this.state.list);
        //     // console.log("///////////////////////////////////////////////////////////////////////////////////////////////////////")
        //     // console.log('......................................redux props',this.props);
        //     // this.setState({ json: this.props.json[0] });
        //     // console.log(this.state.json)
        // });
        // this.setState({ addedlist: this.props.addlist });
        // this.setState({ json: this.props.json });

        axios.get('https://nodesense.github.io/api/products.json').then( response => {
            const responseData = response && response.data;
            for (var i = 0; i < responseData.length; i++) {
                Object.assign(responseData[i], {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkm_GGgo9eDdNNTKH8Oogr_JEA1-kb3CCV_q_Suqu0n-q6h10F'});
            }
            this.setState({ list: responseData });
        });
        this.setState({ addedlist: this.props.addlist });
    }


    // getData = () => {
    //     console.log("get method in productlist.js")
    //     return new Promise((resolve, reject) => {
    //         axios.get('https://nodesense.github.io/api/products.json').then(function (response) {
    //             resolve(response);
    //             console.log(response)
    //         }).catch(function (error) {
    //             reject(error);
    //         });
    //     });
    // }

    componentWillReceiveProps(nextProps) {
        console.log('willreceiveprops of productlist.js', nextProps);
        this.setState({ addedlist: nextProps.addlist });
        //this.setState({ json: nextProps.json[0] });
        //alert(this.state.addedlist);
    }


    cartSelected = (productSelected) => {
        console.log("cart selected method of productlist.js", this.props)
        //console.log(productSelected);
        this.props.actions(productSelected);
        alert(`${productSelected.name} added to your wish-list`);
    }


    handleInputChanged = (event) => {
        let itemSearch = event.target.value;
        console.log(itemSearch, "parent component");
        let { list } = this.state;
        console.log(list);
        list = list.filter((item) => {
            var k = item.name.toLowerCase().search(itemSearch.toLowerCase()) !== -1;
            console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkk', k);
            return k;
        });
        this.setState({ updatedList: list });
        this.setState({searchBoxValue: event.target.value});
    }


    render() {
        console.log("render of produclist.js", this.state.list);
        //console.log('searchvalues', this.state.searchvalues)
        let arr1;
        if (this.state.updatedList.length === 0 && this.state.searchBoxValue === '') {
            arr1 = this.state.list;
            arr1.push(...this.state.addedlist);
            console.log("////////////////////if case of search productlist.js", arr1)
        }
        else if (this.state.updatedList.length === 0 && this.state.searchBoxValue !== '') {
            arr1 = "Sorry..... Out of Stock or Item not found -__-";
        }
        else {
            console.log("////////////////////else case of search productlist.js")
            arr1 = this.state.updatedList;
            //arr1.push(...this.state.addedlist);

        }

        return (
            <div>
               <Product list={arr1} handleInputChanged={this.handleInputChanged} cartSelected={this.cartSelected} />
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    console.log("map state to props of Productlist.js")
    return {
        addlist: state.cart.productItems
    }
};

const mapDispatchToProps = {
    actions: cartAction.addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);