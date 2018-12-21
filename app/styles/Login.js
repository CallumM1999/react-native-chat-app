import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    page: {
        justifyContent: 'center',
     //    alignItems: 'center',
        width: '100%',
        height: '100%'
     },
     container: {
         backgroundColor: '#eee',
         padding: 10,
         borderRadius: 4,
         marginHorizontal: 10
     },
     title: {
         textAlign: 'center',
         fontSize: 34
     },
     input: {
         borderBottomColor: 'blue',
         borderBottomWidth: 2,
         borderStyle: 'solid',
 
 
         marginBottom: 20,
 
         // backgroundColor: '#f4f4f4'
     },
     error: {
         marginBottom: 20,
         backgroundColor: '#FFD2D2',
         color: '#D8000C',
         padding: 8,
         borderRadius: 3
     }
});

export default styles;