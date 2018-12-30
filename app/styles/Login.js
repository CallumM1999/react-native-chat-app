import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    page: {
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    container: {
        padding: 10,
        borderRadius: 4,
        marginHorizontal: 10
    },
    input: {
        marginTop: 40,
        backgroundColor: '#ddd',
        borderRadius: 4,
        paddingHorizontal: 10,
    },
    loading: {
        fontSize: 20,
        marginTop: 20,
    },
    error: {
        marginTop: 40,
        backgroundColor: '#FFD2D2',
        color: '#D8000C',
        padding: 8,
        borderRadius: 3
    },
    submit: {
        backgroundColor: '#999',
        width: '100%',
        padding: 10,
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        marginTop: 20,
    },
    submitText: {
        fontSize: 26,
        fontWeight: '200',
    }
});

export default styles;