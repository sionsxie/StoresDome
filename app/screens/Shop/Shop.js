/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import {Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import CountDown from '../../Component/CountDowntimer'

const listData = () => {
    let data = [];
    for (let i = 0; i < 20; i++) {
        data.push({key: i})
    }
    return data
}

const {width, height} = Dimensions.get('window')
export default class Shop extends Component {

    // 构造
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigationStateChange.bind(this))
        // 初始状态
        this.state = {};
    }

    onNavigationStateChange(event) {
        if (event.type === 'NavBarButtonPress') {//这是按钮按下的事件类型
            if (event.id === 'search') {//navigatorButtons里的id字段的值
                alert(event.id)
            }
            if (event.id === 'map') {//navigatorButtons里的id字段的值
                alert(event.id)
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/*{this.renderHead()}*/}
                <FlatList
                    data={listData()}
                    ListHeaderComponent={this.renderHead}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={() => <View style={[{backgroundColor: 'transparent', height: 1}]}/>}
                />
            </View>
        );
    }

    renderHead = ()=> {
        return (
            <View style={{flexDirection:'row',backgroundColor:'#06C1AE',height:54,justifyContent: 'space-between',alignItems:'center',paddingLeft:8,paddingRight:8}}>
                <View style={{flexDirection:'row',height:30,alignItems:'center',backgroundColor:'#01AE9C',borderRadius:8,paddingLeft:8,paddingRight:8,paddingTop:4,paddingBottom:4}}>
                    <Image source={require('../../img/rm.png')} style={{width: 25,height: 25}}/>
                    <Text style={{color:'#F9F9F9', fontSize:17,marginLeft:6}}>
                        团购限时抢
                    </Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{color:'#F9F9F9',fontSize:17}}>
                        距离21点结束
                    </Text>
                    <CountDown date={this.getEndDate()}/>
                </View>
            </View>
        )
    }
    getEndDate(){
        let date = new Date()
        date.setHours(21)
        date.setMinutes(0)
        date.setSeconds(0)
        return date.toString()
    }

    renderItem = (item) => {
        return (
            <TouchableOpacity style={{}} activeOpacity={0.7} onPress={()=>{alert(item.item.key+'-=-='),console.log(item)}}>
                <View style={{flexDirection: 'row', padding: 10, backgroundColor: 'white', width: width}}>
                    <Image source={require('../../img/hot_eat.png')} style={{width:100,height:100}}/>
                    <View style={{flex: 1, marginLeft: 8}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems:'center'}}>
                            <Text style={{color:'#000000',fontSize:18}}>
                                炭牛韩国烤肉
                            </Text>
                            <Text style={{color:'#ACACAC',fontSize:14}}>
                                1881.1km
                            </Text>
                        </View>
                        <View style={{marginTop: 3}}>
                            <Text numberOfLines={2} style={{color:'#ACACAC'}}>
                                [价值218元]周一至周五午餐券，提供免费WiFi
                            </Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'flex-end', flex: 1,}}>
                            <Text style={{color:'#2BCABA', fontSize:18,alignSelf:'flex-end'}}>
                                ￥188
                            </Text>
                            <Text style={{marginLeft: 3, color:'#FF9E05',backgroundColor:'#FFF2E6',fontSize:13, borderRadius:3,paddingLeft:2,paddingRight:2}}>
                                减18
                            </Text>
                            <View style={{flex: 1}}/>
                            <Text style={{backgroundColor: '#FF9E05', borderRadius: 5, padding: 5,color:'#FFFFFF'}}>
                                ￥178抢
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0EFF5'
    }
});
