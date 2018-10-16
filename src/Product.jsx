import React from 'react';
import './App.css';


class Product extends React.Component {
    constructor() {
        super();
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:55954/api/products/')
            .then((res) => res.json())
            .then(res => {
                this.setState({
                    products: res
                });
            })
            .catch(error => {
                console.log(error)
            });
    }

    search() {
        var keyWord = this.refs.keyword.value;
        fetch('http://localhost:55954/api/products/' + keyWord)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    products: res
                });
            })
            .catch(error => {
                console.log(error)
            });
    }
    render() {
        return (
            <div>
                <h3> Product List</h3>
                Size:{this.state.products.length}
                <br />
                Product Id <input type="text" ref="keyword" />
                <input type="button" value="Search" onClick={this.search.bind(this)} />
                <br /> <br />

                <table>
                    <thead>
                        <tr>
                            <th>
                                Product Id
                            </th>
                            <th>
                                Product Name
                            </th>
                            <th>
                                Product Category
                            </th>
                            <th>
                                Product Price
                            </th>
                            <th>
                                Product Quantity
                            </th>
                            <th>
                                Sub Total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map(function (p, index) {
                            return (
                                <tr>
                                    <td>{p.ProductId}</td>
                                    <td>{p.ProductName}</td>
                                    <td>{p.ProductCategory}</td>
                                    <td>{p.ProductPrice}</td>
                                    <td>{p.ProductQuantity}</td>
                                    <td>{p.ProductPrice * p.ProductQuantity}</td>
                                </tr>

                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Product;