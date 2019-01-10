import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableWithoutFeedback, TouchableHighlight, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/DashboardSettingsModal';
import PropTypes from 'prop-types';

const DashboardSettingsModal = ({ closeModal, visible }) => (
	<Modal
		onRequestClose={closeModal}
		visible={visible}
		transparent={true}
	>
		<TouchableWithoutFeedback onPress={closeModal}>
			<View style={styles.container} >
				<TouchableWithoutFeedback onPress={() => { }} >
					<View style={styles.contents}>

						<View style={styles.closeBtn}>
							<TouchableWithoutFeedback onPress={closeModal} >
								<Icon name='close' size={30} color='#444' />
							</TouchableWithoutFeedback>
						</View>

						<Text style={styles.title}>Settings</Text>

						<View style={styles.list}>

							<View style={styles.listItem}>
								<TouchableHighlight onPress={() => Alert.alert('delete')}>
									<Text style={styles.listItemText} >Delete conversation</Text>
								</TouchableHighlight>
							</View>

							<View style={styles.listItem}>
								<TouchableHighlight onPress={() => Alert.alert('mute')} >
									<Text style={styles.listItemText} >Mute notifications</Text>
								</TouchableHighlight>
							</View>
						</View>

					</View>
				</TouchableWithoutFeedback>
			</View>
		</TouchableWithoutFeedback>
	</Modal>

);

DashboardSettingsModal.propTypes = {
	closeModal: PropTypes.func.isRequired,
	visible: PropTypes.bool.isRequired
};

export default DashboardSettingsModal;