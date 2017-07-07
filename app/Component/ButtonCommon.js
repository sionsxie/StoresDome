/**
 * Created by Love_xie on 2017/6/29.
 */
"use strict";

import React, {Component} from 'react'
import {ColorPropType, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    textStyle: {
        color: 'white',
        fontSize: 13,
        textAlign: 'center'
    }
});
export default class ButtonCommon extends Component {
    props: {
        backgroundColor?: color,
        title: string,
        titleStyle?: style,
        titleExplainStr?: string | number,
        titleExplainStrStyle?: style,
        titleExplainImg?: url,
        titleExplainImgStyle?: style,
    }
    static propTypes = {
        backgroundColor: ColorPropType,
        title: React.PropTypes.string.isRequired,
        titleStyle: React.PropTypes.any,
        titleExplainStr: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ]),
        titleExplainStrStyle: React.PropTypes.any,
        titleExplainImg: React.PropTypes.oneOfType([
            React.PropTypes.shape({
                uri: React.PropTypes.string,
                headers: React.PropTypes.objectOf(React.PropTypes.string)
            }),
            // Opaque type returned by require('./image.jpg')
            React.PropTypes.number,
            // Multiple sources
            React.PropTypes.arrayOf(
                React.PropTypes.shape({
                    uri: React.PropTypes.string,
                    width: React.PropTypes.number,
                    height: React.PropTypes.number
                }))
        ]),
        titleExplainImgStyle: React.PropTypes.any
    }
    static defaultProps = {
        titleStyle: styles.textStyle,
        titleExplainStrStyle: styles.textStyle
        //titleExplainImgStyle:styles.imgStyle,
    }

    render() {
        return (
            <TouchableOpacity {...this.props} style={[styles.container, {backgroundColor: this.props.backgroundColor}]} activeOpacity={0.8}>
                    {this.renderTop()}
                    <Text style={this.props.titleStyle}>
                        {this.props.title}
                    </Text>
            </TouchableOpacity>
        );
    }

    renderTop() {
        if (this.props.titleExplainStr) {
            return (
                <Text style={this.props.titleExplainStrStyle}>
                    {this.props.titleExplainStr}
                </Text>
            )
        } else {
            return (
                <Image source={this.props.titleExplainImg} style={this.props.titleExplainImgStyle}/>
            )
        }
    }
}
