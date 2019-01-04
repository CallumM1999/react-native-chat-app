import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

class ChatInput extends Component {
	constructor(props) {
		super(props);

		this.updateInputValue = this.updateInputValue.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			input: ''
		};
	}

	handleSubmit() {
		const message = this.state.input;
		if (!message) return;

		this.setState({ input: '' }, () => {
			this.props.sendMessage(message);
		});
	}

	updateInputValue(input) {
		this.setState({ input });
	}

	render() {
		return (
			<View style={styles.input}>
				<TextInput
					placeholder='Send a message...'
					style={styles.textInput}
					value={this.state.input}
					onChangeText={this.updateInputValue}
					onSubmitEditing={this.handleSubmit}
				/>
			</View>
		);
	}
}

ChatInput.propTypes = {
	sendMessage: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	input: {
		borderStyle: 'solid',
		borderColor: '#eee',
		borderTopWidth: 2,
		padding: 5,
	},
});

export default ChatInput;