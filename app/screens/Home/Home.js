/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import {Image, ScrollView, StyleSheet,  View,FlatList} from 'react-native'
import {Pages} from 'react-native-pages'
import ButtonCommon from '../../Component/ButtonCommon'
import {Card,Text, Button,ListItem} from 'react-native-elements'
import ButtonOption from '../../Component/ButtonOption'

export default class Home extends Component {

    render() {
        return (
            <ScrollView style={styles.container}>
                {this.renderNavBar()}
                {this.renderTopView()}
                {this.renderRecommend()}
                {this.renderRecommend1()}
                {this.renderShopCol()}
                {this.renderHot()}
                {this.renderGuessLive()}

            </ScrollView>
        );
    }

    renderGuessLive(){
        let item = ()=>{
            return (
                <View style={{flexDirection:'row',padding:8}}>
                    <Image source={require('../../img/hot_water.png')}/>

                </View>
            )
        }
        return (
            <View style={{marginTop:8}}>
                <ButtonOption leftImg={require('../../img/cnxh.png')} title={'猜你喜欢'} onPress={() => alert('猜你喜欢')}/>
                <FlatList />
                <View style={{flexDirection:'row',padding:8,backgroundColor:'#FFF'}}>
                    <Image source={require('../../img/hot_water.png')} style={{borderRadius:8}}/>
                    <View style={{flex:1}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between',paddingHorizontal:8}}>
                            <Text>金百万烤鸭店</Text>
                            <Text>>100</Text>
                        </View>
                    </View>

                </View>
            </View>
        )
    }
    renderHot(){
        return (
            <View style={{marginTop:8}}>
                {/*<ListItem roundAvatar title={'热门推荐'} avatar={require('../../img/rm.png')} containerStyle={{backgroundColor:'#FFF'}}  rightTitle={'查看全部'}/>*/}
                <ButtonOption leftImg={require('../../img/rm.png')} title={'热门推荐'} rightText={'查看全部'} rightTextStyle={{fontSize:14}} onPress={() => alert('热门推荐')}/>
                <View style={{flexDirection:'row',marginTop:1,backgroundColor:'#FFF', padding:8}}>
                    <View style={{flex:1,backgroundColor:'#DCDCDC',flexDirection:'row',height:60}}>
                        <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                            <Text style={{fontSize:14, color:'#FFE070', textAlignVertical:'center',fontWeight:'bold'}}>最高立减25</Text>
                            <Text style={{color:'#8E8E8E',fontSize:10, textAlignVertical:'center'}} numberOfLines={1}>领取优惠券</Text>
                        </View>
                        <Image source={require('../../img/hot_car.png')} style={{flex:1,width:undefined,height:undefined}} resizeMode={'stretch'}/>
                    </View>
                    <View style={{width:8}}/>
                    <View style={{flex:1,backgroundColor:'#DCDCDC',flexDirection:'row',height:60}}>
                        <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                            <Text style={{fontSize:14, color:'#FFE070', textAlignVertical:'center',fontWeight:'bold'}}>最高立减25</Text>
                            <Text style={{color:'#8E8E8E',fontSize:10, textAlignVertical:'center'}} numberOfLines={1}>领取优惠券</Text>
                        </View>
                        <Image source={require('../../img/hot_car.png')} style={{flex:1,width:undefined,height:undefined}} resizeMode={'stretch'}/>
                    </View>
                </View>
                <View style={{flexDirection:'row',marginTop:1,backgroundColor:'#FFF', padding:8}}>
                    <View style={{flex:1,backgroundColor:'#DCDCDC',height:90}}>
                        <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                            <Text style={{fontSize:14, color:'#FFE070', textAlignVertical:'center',fontWeight:'bold'}}>最高立减25</Text>
                            <Text style={{color:'#8E8E8E',fontSize:10, textAlignVertical:'center'}} numberOfLines={1}>领取优惠券</Text>
                        </View>
                        <Image source={require('../../img/hot_car.png')} style={{flex:1,width:undefined,height:undefined}} resizeMode={'stretch'}/>
                    </View>
                    <View style={{width:8}}/>
                    <View style={{flex:1,backgroundColor:'#DCDCDC',height:90}}>
                        <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                            <Text style={{fontSize:14, color:'#FFE070', textAlignVertical:'center',fontWeight:'bold'}}>最高立减25</Text>
                            <Text style={{color:'#8E8E8E',fontSize:10, textAlignVertical:'center'}} numberOfLines={1}>领取优惠券</Text>
                        </View>
                        <Image source={require('../../img/hot_car.png')} style={{flex:1,width:undefined,height:undefined}} resizeMode={'stretch'}/>
                    </View>
                    <View style={{width:8}}/>
                    <View style={{flex:1,backgroundColor:'#DCDCDC',height:90}}>
                        <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                            <Text style={{fontSize:14, color:'#FFE070', textAlignVertical:'center',fontWeight:'bold'}}>最高立减25</Text>
                            <Text style={{color:'#8E8E8E',fontSize:10, textAlignVertical:'center'}} numberOfLines={1}>领取优惠券</Text>
                        </View>
                        <Image source={require('../../img/hot_car.png')} style={{flex:1,width:undefined,height:undefined}} resizeMode={'stretch'}/>
                    </View>
                    <View style={{width:8}}/>
                    <View style={{flex:1,backgroundColor:'#DCDCDC',height:90}}>
                        <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                            <Text style={{fontSize:14, color:'#FFE070', textAlignVertical:'center',fontWeight:'bold'}}>最高立减25</Text>
                            <Text style={{color:'#8E8E8E',fontSize:10, textAlignVertical:'center'}} numberOfLines={1}>领取优惠券</Text>
                        </View>
                        <Image source={require('../../img/hot_car.png')} style={{flex:1,width:undefined,height:undefined}} resizeMode={'stretch'}/>
                    </View>

                </View>
            </View>
        )

    }

    renderShopCol(){
        return (
            <View  style={{marginTop: 8}}>
                <ButtonOption leftImg={require('../../img/gwzx.png')} title={'购物中心'} rightText={'全部4家'} rightTextStyle={{fontSize:14}} onPress={() => alert('热门推荐')}/>
                <View style={{flexDirection:'row',marginTop:1,height:100,padding:8,backgroundColor:'#FFF'}}>
                    <View style={{flex:1}}>
                        <View style={{flex:1}}>
                            <Image source={require('../../img/lyl.png')} style={{flex: 1,borderRadius:8,width:undefined,height:undefined}}/>
                            <Text style={{backgroundColor:'#FFA500', position:'absolute',bottom:8}}>22家优惠</Text>
                        </View>
                        <Text style={{alignSelf:'flex-start', color:'black',marginTop:3}}>万达广场</Text>
                    </View>
                    <View style={{width:16}}/>
                    <View style={{flex:1}}>
                        <View style={{flex:1}}>
                            <Image source={require('../../img/lyl.png')} style={{flex: 1,borderRadius:8,width:undefined,height:undefined}}/>
                            <Text style={{backgroundColor:'#FFA500', position:'absolute',bottom:8}}>22家优惠</Text>
                        </View>
                        <Text style={{alignSelf:'flex-start', color:'black',marginTop:3}}>万达广场</Text>
                    </View>
                    <View style={{width:16}}/>
                    <View style={{flex:1}}>
                        <View style={{flex:1}}>
                            <Image source={require('../../img/lyl.png')} style={{flex: 1,borderRadius:8,width:undefined,height:undefined}}/>
                            <Text style={{backgroundColor:'#FFA500', position:'absolute',bottom:8}}>22家优惠</Text>
                        </View>
                        <Text style={{alignSelf:'flex-start', color:'black',marginTop:3}}>万达广场</Text>
                    </View>
                </View>
            </View>
        )
    }

    renderRecommend1(){
        return (
            <View style={{backgroundColor:'#FFF',height:150,marginTop:8}}>
                <View style={{flexDirection:'row', flex:1,justifyContent:'space-between'}}>
                    <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                        <Text style={{fontSize:18, color:'#EF8769', textAlignVertical:'center',fontWeight:'bold'}}>最高立减25</Text>
                        <Text style={{color:'#D7D7D7',fontSize:13, textAlignVertical:'center'}}>领取优惠券  更便宜</Text>
                    </View>
                    <Image source={require('../../img/nsj.png')} style={{flex:1,width:undefined,height:undefined}} resizeMode={'contain'}/>
                </View>
                <View style={{height:1,backgroundColor:'#DCDCDC'}}/>
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                            <Text style={{fontSize:14, color:'#FFE070', textAlignVertical:'center',fontWeight:'bold'}}>最高立减25</Text>
                            <Text style={{color:'#8E8E8E',fontSize:10, textAlignVertical:'center'}} numberOfLines={1}>领取优惠券  更便宜</Text>
                        </View>
                        <Image source={require('../../img/nsj.png')} style={{flex:1,width:undefined,height:undefined}} resizeMode={'contain'}/>
                    </View>
                    <View style={{width:1,backgroundColor:'#DCDCDC'}}/>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                            <Text style={{fontSize:14, color:'#FFE070', textAlignVertical:'center',fontWeight:'bold'}}>最高立减25</Text>
                            <Text style={{color:'#8E8E8E',fontSize:10, textAlignVertical:'center'}} numberOfLines={1}>领取优惠券  更便宜</Text>
                        </View>
                        <Image source={require('../../img/nsj.png')} style={{flex:1,width:undefined,height:undefined}} resizeMode={'contain'}/>
                    </View>
                </View>
                <View style={{height:1,backgroundColor:'#DCDCDC'}}/>
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                            <Text style={{fontSize:14, color:'#FFE070', textAlignVertical:'center',fontWeight:'bold'}}>最高立减25</Text>
                            <Text style={{color:'#8E8E8E',fontSize:10, textAlignVertical:'center'}} numberOfLines={1}>领取优惠券  更便宜</Text>
                        </View>
                        <Image source={require('../../img/nsj.png')} style={{flex:1,width:undefined,height:undefined}} resizeMode={'contain'}/>
                    </View>
                    <View style={{width:1,backgroundColor:'#DCDCDC'}}/>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                            <Text style={{fontSize:14, color:'#FFE070', textAlignVertical:'center',fontWeight:'bold'}}>最高立减25</Text>
                            <Text style={{color:'#8E8E8E',fontSize:10, textAlignVertical:'center'}} numberOfLines={1}>领取优惠券  更便宜</Text>
                        </View>
                        <Image source={require('../../img/nsj.png')} style={{flex:1,width:undefined,height:undefined}} resizeMode={'contain'}/>
                    </View>
                </View>
            </View>
        )
    }

    renderRecommend(){
        return (
            <View style={{height:120,flexDirection:'row',marginTop:10,backgroundColor:'#FFF',borderColor:'#DCDCDC' ,borderBottomWidth:1,borderTopWidth:1}}>
                <Image source={require('../../img/yyms.png')} style={{flex:1, }} resizeMode={'contain'}/>
                <View style={{width:1,backgroundColor:'#F0EFF5'}}/>
                <View style={{flex:1}}>
                    <Image source={require('../../img/nsj.png')} style={{flex:1}} resizeMode={'contain'}/>
                    <View style={{height:1,backgroundColor:'#F0EFF5'}}/>
                    <Image source={require('../../img/yyms.png')} style={{flex:1}} resizeMode={'contain'}/>
                </View>
            </View>
        )
    }

    renderTopView(){
        let views = (data,slice = 3)=>{
            let result = []
            for (var i = 0,len = data.length; i < len; i<len,i+=slice) {
                result.push(data.slice(i,i+slice))
            }
            let chileViews = [];
            for (let i = 0; i < result.length; i++) {
                let item = result[i],childView=[]
                for (let j = 0; j < item.length; j++) {
                    let childItem = item[j];
                    childView.push(<ButtonCommon title={childItem.title} titleStyle={styles.topViewText} titleExplainImg={childItem.img} titleExplainImgStyle={styles.topViewImg} key={childItem.key}
                                                 onPress={()=>{alert(childItem.title)}}/>)
                }
                chileViews.push(
                    <View style={{flexDirection:'row',paddingTop:4,paddingBottom:4}} key={i}>
                        {childView}
                    </View>
                )
            }
            return (
                <View>
                    {chileViews}
                </View>
            )
        }
        let data = [{key:1,title:'足疗按摩',img:require('../../img/zlam.png')},{key:2,title:'购物',img:require('../../img/gw.png')},{key:3,title:'今日新单',img:require('../../img/jrxd.png')},
            {key:4,title:'小吃快餐',img:require('../../img/xckc.png')},{key:5,title:'生活服务',img:require('../../img/shfw.png')},{key:6,title:'甜点饮品',img:require('../../img/tdyp.png')}
            ,{key:7,title:'美甲',img:require('../../img/mj.png')},{key:8,title:'景点门票',img:require('../../img/jdmp.png')},{key:9,title:'旅游',img:require('../../img/ly.png')},
            {key:10,title:'全部分类',img:require('../../img/qbfl.png')}]
        let data1 = [{key:7,title:'测试',img:require('../../img/tdyp.png')},{key:8,title:'测试',img:require('../../img/tdyp.png')},{key:9,title:'测试',img:require('../../img/tdyp.png')},
            {key:10,title:'测试',img:require('../../img/tdyp.png')},{key:11,title:'测试',img:require('../../img/tdyp.png')},{key:12,title:'测试',img:require('../../img/tdyp.png')}]
        return (
            <View style={{height:150,backgroundColor:'#FFF',borderColor:'#DCDCDC' ,borderBottomWidth:1,borderTopWidth:1}}>
                <Pages indicatorColor={'red'}>
                    {views(data,5)}
                    {views(data1,3)}
                </Pages>
            </View>
        )
    }

    renderNavBar() {
        return (
            <View style={styles.navBar}>
                <Text style={[styles.navText, {color: '#FFF'}]}>
                    广州
                </Text>
                <Text style={[styles.navText, {
                    flex: 1,
                    color: '#C7C7CD',
                    marginLeft: 8,
                    paddingLeft: 10,
                    borderRadius: 20,
                    backgroundColor: '#FFF'
                }]}>
                    输入商家、品类、商圈
                </Text>
                <Image source={require('../../img/icon_homepage_message.png')} style={styles.navImg}/>
                <Image source={require('../../img/icon_homepage_scan.png')} style={styles.navImg}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0EFF5'
    },
    navBar: {
        flexDirection: 'row',
        backgroundColor: '#EB6814',
        height: 48,
        paddingBottom: 13,
        paddingHorizontal: 8
    },
    navText: {
        textAlignVertical: 'center'
    },
    navImg: {
        alignSelf: 'center',
        marginLeft: 8,
        width: 30,
        height: 30
    },
    topViewImg:{
        alignSelf:'center',
        height:40,
        width:40
    },
    topViewText:{
        textAlign:'center',
        color:'#000'
    }

});
