import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import FloatingButton from '../componenets/FloatingButton';
import Container from '../componenets/Container';
import DashboardItem from '../componenets/DashboardItem';
import { loadMessages } from '../actions/messages';
import PropTypes from 'prop-types';

class Dashboard extends Component {
	constructor(props) {
		super(props);
	}

    componentDidMount = () => this.props.dispatch(loadMessages());

    render() {
    	return (
    		<Container heading='Dashboard' openSettings={() => Actions.settings()}>
    			<FlatList
    				keyExtractor={(item, index) => 'key' + index}
    				data={Object.keys(this.props.messages)}

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
    						/>
    					);
    				}}
    			/>


    			<FloatingButton onPress={() => Actions.newRoom()} />
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