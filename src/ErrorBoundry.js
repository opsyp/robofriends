import React from 'react';

class ErrorBoundry extends React.Component {
	constructor(props){
		super(props);
		this.state={
			hasError:false
		}
	}
	/*Error Handling:This method is called when there is 
	an error during rendering, in a lifecycle method, 
	or in the constructor of any child component*/
	componentDidCatch(error, info){
		this.setState({hasError: true})
	}


	render(){
		if (this.state.hasError) {
			return <h1> Oooops. That is not good</h1>
		}
		return this.props.children
	}

}


export default ErrorBoundry