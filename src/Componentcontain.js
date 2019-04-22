import React, { Component, Fragment } from 'react'
import SendMegsbox from './SendMegsbox'
import Login from './Login'
import store from './store/index'

class Componentcontain extends Component{
	constructor(props){
		super(props);
		this.state = store.getState();
		this.updateuserstate = this.updateuserstate.bind(this);
		store.subscribe(this.updateuserstate);
	}

	render(){
		if (this.state.meslist[0].firstloginstate === false) {
			return (
				<Fragment>
					<Login/>
				</Fragment>
				);
		}
		if (this.state.meslist[0].firstloginstate === true) {
			return (
				<Fragment>
					<SendMegsbox />
				</Fragment>
				);
		}
		return <Fragment></Fragment>;
	}

	updateuserstate(){
		this.setState(store.getState());
	}

}

export default Componentcontain