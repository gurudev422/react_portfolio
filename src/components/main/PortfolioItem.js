import React, { Component } from 'react';
export default class PorfolioItem extends Component {
    render() {
        let {item, index} = this.props;
        return (
            <div className="columns c">
                <div className="item-wrap" style={{textAlign:'center'}}>
                    <a href={`#modal-${index}`}>
                        <img src={`${item.imgurl}`} className="item-img" alt={`${item.imgurl}`}/>
                        <div className="overlay">
                        <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                        </div>
                        </div>
                    </a>
                </div>
                <div id={`modal-${index}`} className="mfp-hide" style={{width:'fit-content'}}>
                    <a href={`${item.url}`}  target="_blank">
                        <img src={`${item.imgurl}`} className="big-img"/>
                    </a>
                </div>
            </div>
        );
    }
}
