/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import ButtonOption from '../../Component/ButtonOption'

export default class More extends Component {

    // 构造
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigationStateChange.bind(this))
        // 初始状态
        this.state = {};
    }

    render() {
        return (
            <ScrollView alwaysBounceVertical={true} showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
                    <ButtonOption style={{marginTop: 20}} title={'扫一扫'} onPress={() => this.handlerSkip('扫一扫')}/>

                    <ButtonOption style={{marginTop: 20}} title={'省流量模式'} isSwitch={true}
                                  onPress={() => this.handlerSkip('省流量模式')} ref={(ref) => this.drawRein = ref}/>
                    <ButtonOption title={'消息提醒'} onPress={() => this.handlerSkip('消息提醒')}/>
                    <ButtonOption title={'邀请好友注册'} onPress={() => this.handlerSkip('邀请好友注册')}/>
                    <ButtonOption title={'邀请好友注册清空缓存'} rightText={'1.2M'}
                                  onPress={() => this.handlerSkip('邀请好友注册清空缓存')}/>

                    <ButtonOption style={{marginTop: 20}} title={'意见反馈'} onPress={() => this.handlerSkip('意见反馈')}/>
                    <ButtonOption title={'问卷调查'} onPress={() => this.handlerSkip('问卷调查')}/>
                    <ButtonOption title={'支付帮助'} onPress={() => this.handlerSkip('支付帮助')}/>
                    <ButtonOption title={'网络诊断'} onPress={() => this.handlerSkip('网络诊断')}/>
                    <ButtonOption title={'关于码团'} onPress={() => this.handlerSkip('关于码团')}/>
                    <ButtonOption title={'我要应聘'} onPress={() => this.handlerSkip('我要应聘')}/>

                    <ButtonOption style={{marginTop: 20}} title={'精品应用'} onPress={() => this.handlerSkip('扫一扫')}/>
            </ScrollView>
        );
    }

    onNavigationStateChange(event) {
        if (event.type === 'NavBarButtonPress') {//这是按钮按下的事件类型
            if (event.id === 'setting') {//navigatorButtons里的id字段的值
                alert(event.id)
            }
        }
    }

    handlerSkip(type) {
        console.log('handlerSkip==>' + type)
        switch (type) {
            case '扫一扫':
                alert(type)
                break;
            case '省流量模式':
                alert(type + ':' + this.drawRein.getIsOn)
                break;
            default:
                alert('点了' + type)
                break;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0EFF5'
    }
});
