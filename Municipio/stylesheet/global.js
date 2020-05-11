import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#003f5c",
    marginBottom:40
  },
  containerNotas: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 10,
    paddingLeft: 2,
    paddingRight: 2,
    backgroundColor: '#F8F8F8',
  },
  inputView:{
    width:"80%",
    backgroundColor:"#003f5c",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#003f5c",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10,
  },
  loginText:{
    color:"white"
  },
  image:{
    width: 100,
    height: 100,
  },
  buttonAnon:{
    width:"80%",
    height:"20%",
    backgroundColor:"#003f5c",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:60
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  containerNotas: {
    flex: 1,
    backgroundColor: '#003f5c',
    paddingVertical: 20,
    paddingHorizontal: 10,
},
iconButtonNotas: {
    backgroundColor: '#003f5c',
    position: 'absolute',
    right: 0,
    top: 40,
    margin: 10
},
titleContainerNotas: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
},
titleNotas: {
    fontSize: 24,
    marginBottom: 50,
    height: 80,
},
textNotas: {
    height: 200,
    fontSize: 16
},
fabNotas: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0,
    backgroundColor: '#003f5c'
},
containerViewNotes: {
  flex: 1,
  backgroundColor: '#242424',
  justifyContent: 'center',

},
titleContainerViewNotes: {
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  
},
titleViewNotes: {
  fontSize: 22
},
titleViewNotesDesc: {
  fontSize: 15
},
fabViewNotes: {
  backgroundColor: '#003f5c',
  position: 'absolute',
  margin: 20,
  right: 0,
  bottom: 10
},
listTitleViewNotes: {
  fontSize: 20
},
line: {
  backgroundColor: '#fff',
  margin: 3,
  flex: 2,
  padding: 5,
  flexDirection: 'row',
}

});
