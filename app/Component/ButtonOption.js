/**
 * Created by Love_xie on 2017/6/28.
 */
"use strict";

import React, {Component} from 'react'
import {ColorPropType, Dimensions, Image, StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native'

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        width: width,
        height: 45,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 8,
        paddingRight: 8,
        borderBottomWidth: 0.5,
        borderBottomColor: '#dddddd'
    },
    navText: {
        textAlignVertical: 'center',
        fontSize: 16,
        color: 'black'
    },
    leftOrRightView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgRight: {
        height: 13,
        width: 8
    },
    leftImgStyle: {
        width: 24,
        height: 24,
        borderRadius: 12
    }
});

export default class ButtonOption extends Component {

    state = {
        isOn: false
    }
    props: {
        leftImgStyle?: style,
        leftImg?: url,
        rightImg?: url,
        rightImg1?: url,
        rightImg1Style?: url,
        title: string,
        rightText?: string,
        rightTextStyle?: style,
        backgroundColor?: color,
        isSwitch?: boolean,
    }
    static propTypes = {
        leftImgStyle: React.PropTypes.any,
        leftImg: React.PropTypes.any,
        rightImg: React.PropTypes.any,
        rightImg1: React.PropTypes.any,
        rightImg1Style: React.PropTypes.any,
        title: React.PropTypes.string.isRequired,
        rightText: React.PropTypes.string,
        rightTextStyle: React.PropTypes.any,
        backgroundColor: ColorPropType,
        isSwitch: React.PropTypes.bool
    }
    static defaultProps = {
        leftImgStyle: styles.leftImgStyle,
        rightImg: require('../img/icon_cell_rightarrow.png'),
        backgroundColor: 'white',
        isSwitch: false
    }

    get getIsOn() {//获取switch控件的值
        return this.state.isOn
    }

    render() {
        return (
            <TouchableOpacity {...this.props} activeOpacity={0.5}>
                <View style={[styles.container, {backgroundColor: this.props.backgroundColor}]}>
                    {this.leftView()}
                    {this.rightView()}
                </View>
            </TouchableOpacity>
        );
    }

    leftView() {
        return (
            <View style={styles.leftOrRightView}>
                <Image style={[{marginRight: 4},this.props.leftImgStyle]} source={this.props.leftImg}/>
                <Text style={styles.navText}>{this.props.title}</Text>
            </View>
        )
    }

    rightView() {
        if (this.props.isSwitch) {
            return <Switch value={this.state.isOn} onValueChange={() => this.setState({isOn: !this.state.isOn})}/>
        } else {
            return (
                <View style={styles.leftOrRightView}>
                    <Text style={[{fontSize: 10, marginRight: 4, color: 'gray'},this.props.rightTextStyle]}>{this.props.rightText}</Text>
                    <Image style={[{ marginRight: 4},this.props.rightImg1Style]} source={this.props.rightImg1}/>
                    <Image style={styles.imgRight} source={this.props.rightImg}/>
                </View>)
        }
    }
}
