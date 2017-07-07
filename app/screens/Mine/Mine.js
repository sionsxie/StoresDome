/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import {Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import ButtonCommon from '../../Component/ButtonCommon'
import ButtonOption from '../../Component/ButtonOption'

const {width, height} = Dimensions.get('window')

export default class Mine extends Component {
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
                <View style={styles.userLayoutStyle}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => alert('userImg')}>
                        <Image style={styles.userImgStyle} source={require('../../img/see.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => alert('userName')}
                                      style={{flex: 1}}>
                        <View style={styles.userNameStyle}>
                            <View style={[styles.userNameStyle, {flex: 1}]}>
                                <Text
                                    style={{
                                        color: 'white',
                                        fontSize: 16,
                                        fontWeight: 'bold',
                                        marginLeft: 4
                                    }}>小马哥的电商</Text>
                                <Image source={require('../../img/avatar_vip.png')} resizeMode={'center'}
                                       style={{width: 17, height: 17}}/>
                            </View>
                            <Image source={require('../../img/icon_cell_rightarrow.png')}
                                   style={{width: 8, height: 13}}/>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.nav1Style}>
                    <ButtonCommon title={'码哥券'} titleExplainStr={100} onPress={() => this.handlerSkip('码哥券')}/>
                    <View style={styles.linV}/>
                    <ButtonCommon title={'评价'} titleExplainStr={12} onPress={() => this.handlerSkip('评价')}/>
                    <View style={styles.linV}/>
                    <ButtonCommon title={'收藏'} titleExplainStr={50} onPress={() => this.handlerSkip('收藏')}/>
                </View>

                <ButtonOption leftImg={require('../../img/collect.png')} title={'我的订单'} rightText={'查看全部订单'}
                              onPress={() => this.handlerSkip('我的订单')}/>

                <View style={styles.navOrderStyle}>
                    <ButtonCommon title={'待付款'} titleExplainImg={require('../../img/order1.png')}
                                  titleExplainImgStyle={styles.navOrderImgStyle} titleStyle={styles.navOrderTextStyle}
                                  onPress={() => this.handlerSkip('待付款')}/>
                    <ButtonCommon title={'待使用'} titleExplainImg={require('../../img/order2.png')}
                                  titleExplainImgStyle={styles.navOrderImgStyle} titleStyle={styles.navOrderTextStyle}
                                  onPress={() => this.handlerSkip('待使用')}/>
                    <ButtonCommon title={'待评价'} titleExplainImg={require('../../img/order3.png')}
                                  titleExplainImgStyle={styles.navOrderImgStyle} titleStyle={styles.navOrderTextStyle}
                                  onPress={() => this.handlerSkip('待评价')}/>
                    <ButtonCommon title={'退款/售后'} titleExplainImg={require('../../img/order4.png')}
                                  titleExplainImgStyle={styles.navOrderImgStyle} titleStyle={styles.navOrderTextStyle}
                                  onPress={() => this.handlerSkip('退款/售后')}/>
                </View>

                <ButtonOption leftImg={require('../../img/draft.png')} title={'钱包'} rightText={'账户余额:￥100'}
                              style={{marginTop: 13}} onPress={() => this.handlerSkip('钱包')}/>
                <ButtonOption leftImg={require('../../img/like.png')} title={'抵用券'} rightText={'0'}
                              onPress={() => this.handlerSkip('抵用券')}/>

                <ButtonOption leftImg={require('../../img/card.png')} title={'积分商城'} style={{marginTop: 13}}
                              onPress={() => this.handlerSkip('积分商城')}/>

                <ButtonOption leftImg={require('../../img/new_friend.png')} title={'今日推荐'}
                              rightImg1={require('../../img/me_new.png')} rightImg1Style={{height: 14, width: 26}}
                              style={{marginTop: 13}} onPress={() => this.handlerSkip('今日推荐')}/>

                <ButtonOption leftImg={require('../../img/pay.png')} title={'我要合作'} rightText={'轻松开店，招财进宝'}
                              style={{marginTop: 13}} onPress={() => this.handlerSkip('我要合作')}/>
            </ScrollView>
        );
    }

    handlerSkip(type) {
        switch (type) {
            case 'type':
                alert(type)
                break;
        }
        alert('点击了：' + type)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0EFF5'
    },
    userLayoutStyle: {
        paddingTop: 18,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EB6814'
    },
    userNameStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    userImgStyle: {
        height: 74,
        width: 74,
        borderRadius: 37,
        borderWidth: 3,
        borderColor: '#F68366'
    },
    nav1Style: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F68366',
        borderTopWidth: 7,
        borderTopColor: '#EB6814'
    },
    navOrderStyle: {
        height: 65,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    navOrderTextStyle: {
        color: '#797979',
        textAlign: 'center',
        fontSize: 14
    },
    navOrderImgStyle: {
        alignSelf: 'center',
        width: 33,
        height: 26
    },
    linV: {
        backgroundColor: 'white',
        width: 0.4,
        height: 33
    }

});
