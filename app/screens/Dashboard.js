import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import FloatingButton from '../componenets/FloatingButton';
import Container from '../componenets/Container';
import DashboardItem from '../componenets/DashboardItem';
import DashboardSettingsModal from '../componenets/DashboardSettingsModal';

import { loadMessages, deleteConversation } from '../actions/messages';
import PropTypes from 'prop-types';

class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.deleteRoom = this.deleteRoom.bind(this);

		this.state = {
			modalOpen: false,
			modalRoom: null
		};
	}

    openModal = room => this.setState({ modalOpen: true, modalRoom: room });
    closeModal = () => this.setState({ modalOpen: false, modalRoom: null })


    deleteRoom = room => {
    	console.log('deleting room: ', room);
    	this.props.dispatch(deleteConversation(room));
    	this.closeModal();
    }

    componentDidMount = () => this.props.dispatch(loadMessages());

    render() {
    	return (
    		<Container heading='Dashboard' openSettings={() => Actions.settings()}>
    			<FlatList
    				keyExtractor={(item, index) => 'key' + index}
    				data={Object.keys(this.props.messages).sort((a, b) => this.props.messages[b].chat[this.props.messages[b].chat.length - 1].time - this.props.messages[a].chat[this.props.messages[a].chat.length - 1].time)}

    				renderItem={({ item }) => {
    					const room = this.props.messages[item];
    					const msg = room.chat[room.chat.length - 1];
    					const title = room.roomType === 'group' ? room.title : `${room.fname} ${room.lname}`;

    					return (
    						<DashboardItem
    							title={title}
    							lastMessage={!!msg && msg.msg}
    							time={!!msg && msg.time}
    							room={item}
    							openModal={this.openModal}
    						/>
    					);
    				}}
    			/>


    			<FloatingButton onPress={() => Actions.newRoom()} />

    			<DashboardSettingsModal
    				closeModal={this.closeModal}
    				visible={this.state.modalOpen}
    				room={this.state.modalRoom}
    				deleteRoom={this.deleteRoom}
    			/>

    		</Container>
    	);
    }
}



Dashboard.propTypes = {
	dispatch: PropTypes.func.isRequired,
	messages: PropTypes.object
};

const mapStateToProps = ({ messages }) => ({
	messages
});

export default connect(mapStateToProps)(Dashboard);