import React from 'react';

const Product = props => {

    const {list} = props;
    // handleInputChange = (event) => {
        
    //     this.setState({
    //         dataName: event.target.value
    //       })
    //     console.log("handle method called",this.state.dataName.length)
    //     this.props.handleInputChanged(this.state.dataName);
    // }
    const itemRenderer = typeof list === 'object' ? 
                (
                    list.map((item, i) => {
                        return (
                            <tr key={i}>
                                <td><b>{item.id}</b></td>
                                <td><img className="fluid" height="100px" width="60px" src={item.img} alt="images"/></td>
                                <td><b>{item.name}</b></td>
                                <td>{item.camera}</td>
                                <td>{item.cpu}</td>
                                <td><button className="btn btn-outline-primary" onClick={() => props.cartSelected(item)}>Add To Wish List</button></td>
                            </tr>
                        )
                    })
                ) : <h2>{list}</h2> ;
        return (
            <div>
                <br/>
                    <form>
                        <input type="text" className="form-control" placeholder="Search for..." onChange={props.handleInputChanged}/>
                    </form>      
                 
                <br/>

                <table className="table table-striped" >
                    <thead className="thead-dark">

                        <tr>
                            <th>Product Id</th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Camera</th>
                            <th>CPU</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>


                        {/*

                            list.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td><b>{item.id}</b></td>
                                        <td><img className="fluid" height="100px" width="60px" src={item.img} alt="images"/></td>
                                        <td><b>{item.name}</b></td>
                                        <td>{item.camera}</td>
                                        <td>{item.cpu}</td>
                                        <td><button className="btn btn-outline-primary" onClick={() => this.props.cartSelected(item)}>Add To Wish List</button></td>
                                    </tr>
                                )
                            })

                        */}
                        {itemRenderer}

                    </tbody>
                </table>

            </div>
        );
};


export default Product;