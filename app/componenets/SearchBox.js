import React from 'react';
import { View, TextInput, Text, TouchableNativeFeedback } from 'react-native';
import styles from '../styles/NewRoom';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchBox = props => (
	<View style={styles.searchContainer}>
		<TextInput
			style={styles.searchInput}
			placeholder='Search'
			value={props.value}
			onChangeText={props.onChangeText}
			onSubmitEditing={props.onSubmitEditing}
		/>
		{
			props.value.length >= 1 && (
				<TouchableNativeFeedback onPress={props.clearSearch}>
					<View style={styles.clearSearch}>
						<Text style={styles.clearSearchText}>
							<Icon name='clear' size={30} color='black' />
						</Text>
					</View>
				</TouchableNativeFeedback>
			)
		}

	</View>
);

SearchBox.propTypes = {
	value: PropTypes.string,
	onChangeText: PropTypes.func.isRequired,
	clearSearch: PropTypes.func.isRequired,
	onSubmitEditing: PropTypes.func.isRequired
};

export default SearchBox;