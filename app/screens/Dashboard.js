import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import FloatingButton from '../componenets/FloatingButton';
import Container from '../componenets/Container';
import DashboardItem from '../componenets/DashboardItem';
import DashboardSettingsModal from '../componenets/DashboardSettingsModal';
import { capitalize } from '../utils/utils';
import { loadMessages, deleteConversation } from '../actions/messages';
import { openRoom } from '../actions/unread';
import PropTypes from 'prop-types';


const Empty = props => {
	return (
		<View style={{
			// backgroundColor: 'orange',
			padding: 30,
		}}>
			<Text style={{ fontSize: 40, textAlign: 'center', color: '#555', marginTop: 60 }}>No conversations!</Text>
			<Text style={{ fontSize: 20, textAlign: 'center', color: '#777', marginTop: 10 }}>Press the Add button to find other users.</Text>
		</View>
	);
};

class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.deleteRoom = this.deleteRoom.bind(this);
		this.openRoom = this.openRoom.bind(this);

		this.state = {
			modalOpen: false,
			modalRoom: null
		};
	}

    openModal = room => this.setState({ modalOpen: true, modalRoom: room });
    closeModal = () => this.setState({ modalOpen: false, modalRoom: null })


    deleteRoom = room => {
    	this.props.dispatch(deleteConversation(room));
    	this.closeModal();
    }

    openRoom(room) {
    	Actions.chat({ room });
    	this.props.dispatch(openRoom(room));
    }

    componentDidMount = () => this.props.dispatch(loadMessages());

    render() {
    	return (
    		<Container heading='Dashboard' openSettings={() => Actions.settings()}>
    			<FlatList
    				keyExtractor={(item, index) => 'key' + index}
    				data={Object.keys(this.props.messages).sort((a, b) => {
    					try {
    						return this.props.messages[b].chat[this.props.messages[b].chat.length - 1].time - this.props.messages[a].chat[this.props.messages[a].chat.length - 1].time;
    					} catch (e) {
    						return b - a;
    					}

    				})}
    				ListEmptyComponent={Empty}

    				renderItem={({ item }) => {
    					const room = this.props.messages[item];
    					const msg = room.chat[room.chat.length - 1];
    					const title = room.roomType === 'group' ? room.title : `${capitalize(room.fname)} ${capitalize(room.lname)}`;

    					return (
    						<DashboardItem
    							title={title}
    							lastMessage={!!msg && msg.msg}
    							time={!!msg && msg.time}
    							room={item}
    							openModal={this.openModal}
    							openRoom={this.openRoom}
    							unread={this.props.unread.hasOwnProperty(item)}
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

const mapStateToProps = ({ messages, unread }) => ({
	messages,
	unread
});

export default connect(mapStateToProps)(Dashboard);