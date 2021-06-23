import React, { Component } from 'react'
import { ProductConsumer } from './Context';

export default class Details extends Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        // api call and set state of product 
    }
    render() {
        let id = this.props.match.params.id;
        return (
            <div>
                <h1>Details!!! {id} </h1>
                <ProductConsumer>
                    {
                        value => {
                            let {img, title, company, price} = value.getItem(+id);
                            return <>
                                <img src = {`/${img}`}/> <br />
                                {title} {company} {price}
                            </>
                        }
                    }
                </ProductConsumer>
            </div>
        )
    }
}
