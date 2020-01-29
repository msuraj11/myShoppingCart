import React from 'react';
import data from './data.json';
import * as cartAction from '../actions/cartAction';
import { connect } from 'react-redux'; //to connect react&redux

const prolistSelected = (props, productSelected) => {
    props.actions(productSelected);
    alert(`${productSelected.name} is added to Products`);
};

const AddToList = props => {

    return (
        <div>
            <table className="table table-striped" >
                <thead className="thead-dark">
                    <tr>
                        <th>ProductId</th>
                        <th>ProductName</th>
                        <th>Action To ProductList</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((list1, index) => {
                        return (
                            <tr key={index}>
                                <td><b>{list1.id}</b></td>
                                <td><b>{list1.name}</b></td>
                                <td><button className="btn btn-outline-primary" onClick={() => prolistSelected(props,list1)}>Add To products</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};


const mapDispatchToProps = {
    actions: cartAction.prolistSelected
}

export default connect(null, mapDispatchToProps)(AddToList);