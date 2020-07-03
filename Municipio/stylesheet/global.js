import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#003f5c",
    marginBottom:40,

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
fabNotas2: {
  position: 'absolute',
  margin: 20,
  right: 60,
  bottom: 0,
  backgroundColor: '#003f5c'
},
containerViewNotes: {
  flex: 1,
  backgroundColor: '#003f5c',
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
},
MainContainerDetailP: {
  backgroundColor: '#242424',
flex: 1,
flexDirection: 'column'
},
MainContainerDetailL: {
  backgroundColor: '#242424',
flex: 1,
flexDirection: 'row',
marginLeft: 280,
marginRight: 280,
marginTop: -40,
paddingBottom: 90,
},
secondcontainerDetail: {
flex: 1,
flexDirection: 'row',
justifyContent: 'center'
},
TextInputStyleDetail:{
borderWidth: 1,
marginTop: 100,
padding: 10,
margin: 10,
borderColor: '#003f5c',
height: 40,
borderRadius: 10,
marginBottom: 10,
color:"white",
textAlign: 'center',
},
buttonDetail: {
alignItems: "center",
backgroundColor: "#003f5c",
padding: 10,
borderRadius: 10,
margin: 10,
height: 40
},
TextInputStylesDetail:{
  color: "white",
},
containerMap: {
  ...StyleSheet.absoluteFillObject,
  height: '100%',
},
map: {
  ...StyleSheet.absoluteFillObject,
},



});
