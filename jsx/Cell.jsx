import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/**
 * This react component returns one cell for notification,  
 * containing a picture and a subtitle
 */
const picStyle = {
    borderRadius: 100,
    width: 200,
    height: 200,
    textAlign: 'center',
    margin: 5,
    backgroundColor: 'grey',
};

const ulStyle = {
    margin: 0,
    padding: 0,
    width:800,
    listStyleType: 'none',
    display: 'block',
}

const liStyle = {
    display: 'inline-block',
    // display: 'inline-block',
    verticalAligh: 'text-top',
    backgroundColor: 'lightGrey',
    listStyleType: 'none',
    width: 220,
    height: 270,
    padding: 0,
    textAlign: 'center',
    boxSizing: 'border-box',
    margin: 10,
}

function Pic(props) {
    return (
        <img className="NotificationPic"
        src={props.pic.picUrl}
        alt={props.pic.name}
        style={picStyle}
        />
    )
}

function PicLink(props) {
    return (
        <a className="NotificationLink"
           href={props.type.typeUrl}
           target='_blank'>
           <p> {props.typleUrl} </p>
           <Pic pic={props.type.pic} />
        </a>
    )
}


class Cell extends React.Component {

    render() {
        return (
            // <ul style={ulStyle}>
            <li style={liStyle}>
                <PicLink type={this.props.info} />
                <p>  {this.props.info.text} </p>
            </li>
            // </ul>
        );
    }
}

// ReactDOM.render(<Cell type={type}/>, document.getElementById('root')
// );

export default Cell;