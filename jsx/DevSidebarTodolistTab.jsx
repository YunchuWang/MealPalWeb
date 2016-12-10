import React from 'react';
import ReactDOM from 'react-dom'
import '../css/devSidebarTodolistTab.css';

var DevSidebarTodolistTab = React.createClass({
	getInitialState: function(){
		return {items: []};
	},
	updateItems: function(newItem){
		var allItems = this.state.items.concat([newItem]);
		this.setState({items: allItems});
	},
	render: function(){
		return (
			<div className="TodoList">
				<TodoBanner className="TodoBanner"/>
				<TodoList items={this.state.items}/>
				<TodoForm onFormSubmit={this.updateItems}/>
			</div>
		);
	}
});

var TodoBanner = React.createClass({
	render: function(){
		return (
			<h3 className="TodoBanner">TODO</h3>
		);
	}
});

var TodoList = React.createClass({
	render: function() {
		var createItem = function(itemText) {
			return (
				<TodoListItem>{itemText}</TodoListItem>
			);
		};
		return <ul style={ulstyle}>{this.props.items.map(createItem)}</ul>;
	}
});

var TodoListItem = React.createClass({
	render: function(){
		return (
			<li className="ListItems">{this.props.children}</li>
		);
	}
});

var TodoForm = React.createClass ({
   getInitialState: function() {
		return {item: ''};
	},
	handleSubmit: function(e){
		e.preventDefault();
        
		this.props.onFormSubmit(this.state.item);
		this.setState({item: ''});
		ReactDOM.findDOMNode(this.refs.item).focus();
		return;
	},
	onChange: function(e){
		this.setState({
			item: e.target.value
		});
	},
	render: function(){
		return (
			<form className="InputForm"
                onSubmit={this.handleSubmit}>
				<input 
                    placeholder="enter task"
                    type='text' ref='item' onChange={this.onChange} value={this.state.item}/>
				<input 
                    type='button' value='Add'
                    style={button}/>
			</form>
		);
	}
})



var button={
    backgroundColor: '#0066FF',
    border: "none",
    borderRadius: 5,
    color:"#FFF",
    fontSize: '1em',
    textAlign: "center",
    margin: 15,
    paddingTop: 8,
    paddingRight: 10,
    width: 50
   
    
}


var ulstyle = {
    listStyleType: 'square',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 15,
    marginLeft: 0,
    lineHeight: 1.5
}

module.exports = DevSidebarTodolistTab;