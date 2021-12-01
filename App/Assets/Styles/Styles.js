import {Platform, StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  row:{
    flexDirection:'row'
  },
  justifySpcBtw:{
    justifyContent:'space-between'
  },
  alignContentCenter:{
    alignItems:'center',
    justifyContent:'center'
  },
  mainHeading:{
    color:'black',
    fontSize: 20,
    fontWeight:'500'
  },
  subHeading:{
    color:'black',
    fontSize: 15,
  },
  marginTop10:{
    marginTop:10
  },
  marginTop15:{
    marginTop:15
  },
  mainHeadingView:{
    padding:10,
    backgroundColor:"white"
  },
  totalView:{
    height:'auto',
    backgroundColor:"white",
    margin:"4%",
    borderRadius:5,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding:10
  },
  selectedItems:{
    height:"auto",
    backgroundColor:"white",
    margin:"1%",
    borderRadius:5,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  separator:{
    borderBottomWidth:1,
    borderBottomColor:'lightgrey',
    marginBottom:10,
    marginLeft:5,
    marginRight:5,
  },
  space:{
    marginBottom:10,
    marginLeft:5,
    marginRight:5,
  },
  commonViewLeft:{
    height:60,
    width:"20%",
  },
  commonViewRight:{
    height:60,
    width:"60%",
    marginLeft:10
  },
  buttonLook:{
    backgroundColor:"#1348a4",
    height:50,
    margin:20,
    borderRadius:5,
  },
  buttonText:{
    color:'white',
    fontSize:15
  },
  commonImage:{
    height:'90%',
    width:"100%"
  },
  commonParent:{
    padding:10,
  },
  orderHeading:{
    fontSize:18,
    fontWeight:"600"
  },
  orderSubHeading:{
    fontSize:12,
    fontWeight:"300",
    color:'#242f38'
  },
  phnMargin:{
    marginTop:8,
    marginLeft:10
  },  
  orderPrice:{
    fontSize:20,
    color:'maroon'
  },
  totalTitle:{
    fontSize:20,
  },
  totalValue:{
    fontSize:20,
    color:"grey"
  },
  gtotalTitle:{
    fontSize:23,
    fontWeight:"600"
  },
  gtotalValue:{
    fontSize:23,
    fontWeight:"600"
  },
  checkoutHeadings:{
    textTransform: 'uppercase',
    fontSize: 15,
    fontWeight:'700'
  },
  selectedBox:{
    borderColor:'#f33b6a',
    borderWidth:1,
    borderRadius:5,
    height:'auto',
    padding:10
  },
  unselectedBox:{
    // borderColor:'#f33b6a',
    borderWidth:1,
    borderRadius:5,
    height:'auto',
    padding:10
  },
  addressHeading:{
    color:'#f33b6a',
    fontWeight:'bold',
  },
  iconStyle:{
    alignSelf:'center',
    color:'#f33b6a',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor:"rgba(0, 0, 0, 0.5)"
  },
  modalView: {
    margin: 5,
    backgroundColor: "white",
    borderRadius: 7,
    padding: 35,
    width:350,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    // height:'auto',
    // width:100,
    marginTop:10
  },
  buttonOpen: {
    backgroundColor: "#1348a4",
  },
  buttonClose: {
    backgroundColor: "#181a1b",
    marginLeft:10
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Styles;
