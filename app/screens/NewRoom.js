import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Container from '../componenets/Container';
import { addRoom } from '../actions/messages';
import PropTypes from 'prop-types';
import socket from '../socket/socket';

import styles from '../styles/NewRoom';

import SearchBox from '../componenets/SearchBox';
import NewRoomOnlineUsers from '../componenets/NewRoomOnlineUsers';
import NewRoomSearchResults from '../componenets/NewRoomSearchResults';

class NewRoom extends Component {
	constructor(props) {
		super(props);

		this.addConversation = this.addConversation.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.handleSearchInput = this.handleSearchInput.bind(this);
		this.clearSearch = this.clearSearch.bind(this);

		this.state = {
			input: '',
			results: [],
			resultsLength: 0,
			search: false,
			typingTimeout: 0
		};
	}

    clearSearch = () => this.setState({ input: '', search: false })

    addConversation(user) {
    	if (this.props.messages.hasOwnProperty(user.userID)) return Actions.replace('chat', { room: user.userID });
    	this.props.dispatch(addRoom(user, () => Actions.replace('chat', { room: user.userID })));
    }

    handleSearch() {
    	if (this.state.input === '') return this.setState({ search: false });

    	socket.userSearch(this.state.input, this.props._id, response => {
    		this.setState({
    			results: response.users,
    			resultsLength: response.count,
    			search: true,
    		});
    	});
    }

    handleSearchInput(input) {
    	this.setState({ input });
    	if (this.state.typingTimeout) clearTimeout(this.state.typingTimeout);
    	this.setState({ typingTimeout: setTimeout(this.handleSearch, 600) });
    }

    render() {
    	return (
    		<Container heading='Create' back={Actions.pop}>
    			<View style={styles.pageContainer}>
    				<SearchBox
    					placeholder='Search'
    					value={this.state.input}
    					onChangeText={this.handleSearchInput}
    					onSubmitEditing={this.handleSearch}
    					clearSearch={this.clearSearch}
    				/>

    				<View style={styles.recommendedContainer}>
    					{
    						!this.state.search ?
    							(
    								<NewRoomOnlineUsers
    									users={this.props.users.filter(user => user.userID !== this.props._id)}
    									addConversation={this.addConversation}
    								/>
    							)
    							:
    							(
    								<NewRoomSearchResults
    									results={this.state.results}
    									addConversation={this.addConversation}
    									resultsLength={this.state.resultsLength}
    								/>
    							)
    					}
    				</View>
    			</View>
    		</Container>
    	);
    }
}

NewRoom.propTypes = {
	messages: PropTypes.object.isRequired,
	dispatch: PropTypes.func,
	users: PropTypes.array.isRequired,
	_id: PropTypes.string.isRequired
};

const mapStateToProps = ({ users, auth, messages }) => ({
	users: users.users,
	_id: auth._id,
	messages
});

export default connect(mapStateToProps)(NewRoom);