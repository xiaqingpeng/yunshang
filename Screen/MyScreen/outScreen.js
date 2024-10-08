import React ,{Component}from 'react';
import {StyleSheet, Text, View, TouchableOpacity,
    // AsyncStorage, 
    
    Alert} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-community/async-storage';
export default class outScreen extends Component{

    Out = async() =>{
        const { navigation } = this.props;
        AsyncStorage.removeItem('userInfo',(error) => {
            if (!error) {
                Alert.alert("退出成功");
                navigation.goBack("我的");
            }
        });
    }
render(){
    const { navigation } = this.props;
  return (
    <View style={styles.container}>
        <View style={{height:45,
        backgroundColor:"pink",
        alignItems:"center",
        justifyContent:"center"}}>
        <View style={{flexDirection:'row',justifyContent:"space-between",width:"90%"}}>
        <TouchableOpacity
        onPress={() => navigation.goBack()}>
          <FontAwesome name={'angle-left'} size={25} color={'#000'} /></TouchableOpacity>
          <Text style={{fontSize:18,
            textAlign: 'center',
            textAlignVertical: 'center',}}>活动</Text>
          <TouchableOpacity>
          <FontAwesome name={'clock-o'} size={25} color={'#000'} /></TouchableOpacity>
      </View>
      </View>
      <View style={styles.container_body}>
         <View style={styles.container_bug1}>
             <View style={styles.word}><Text style={{fontSize: 14}}>帮助</Text></View>
             <View style={styles.awe}>
                 <FontAwesome name={'angle-right'} size={20} color={'#000'}/>
             </View>
         </View>
         <View style={styles.container_bug2}>
             <View style={styles.word}><Text style={{fontSize: 14}}>关于我们</Text></View>
             <View style={styles.awe}>
                 <FontAwesome name={'angle-right'} size={20} color={'#000'}/>
             </View>
         </View>
      </View>
      <View style={{alignItems:'center', marginTop:25}}>
          <TouchableOpacity 
          onPress={() =>{this.Out()}
        }
          style={styles.button}><Text style={{fontSize:13, color:'#955357'}}>退出登录</Text></TouchableOpacity>
      </View>
    </View>
  );}
}


const styles = StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor:'#f2f2f2',
     marginTop:20
    },
    container_body:{
        width:'100%',
        height:'20%',
        flexDirection:'column',
        backgroundColor:'green'
    },
    container_bug1:{
        width:'100%',
        height:'50%',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#ffffff',
        borderBottomWidth: 0.6 ,
        borderBottomColor:'#000'
    },
    container_bug2:{
        width:'100%',
        height:'50%',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#ffffff'
    },
    word:{
        width:'20%',
        height:'100%',
        justifyContent:'center',
        marginLeft: 40
    },
    awe:{
        width:'20%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        width:90,
        height:35,
        justifyContent:'center',
        alignItems:'center',
        borderWidth: 1,
        borderRadius: 8,
        borderColor:'#955357'
    }
  }); 