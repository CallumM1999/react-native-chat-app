import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {    
        backgroundColor: '#333',

        width: '100%',
        height: 60,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    heading: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center'
    },

    backButton: {
        position: 'absolute',
        left: 10,
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#444',
        borderRadius: 6,
        paddingVertical: 4,
        paddingHorizontal: 8,
        
    },
    backButtonText: {
        color: '#000',
        fontSize: 20
    }
});

export default styles;