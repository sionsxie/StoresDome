/**
 * Created by Love_xie on 2017/7/10.
 */
"use strict";

import React, {Component, PropTypes} from 'react'
import {StyleSheet, View} from 'react-native'
import Text from 'react-native-elements/src/text/Text'
import {Button,FormInput,Divider} from 'react-native-elements'


import * as testActions from '../../redux/test.action'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class HomeDetails extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            param: null,
            value:'测试'
        };
    }

    componentDidMount() {
        this.setState({
            //param:this.props.navigator.
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>HomeDetails----{this.props.test}</Text>
                <Text onPress={() => this.handlerSkip()}>返回上一级</Text>
                <FormInput ref="form" textInputRef={'textInputRef'} placeholder={'请输入..'}
                           onChangeText={(value)=>{
                               console.log(value+'====')
                               this.setState({value}
                           )}}/>
                <Button title={this.state.value} backgroundColor={'red'} onPress={()=>{
                    alert(this.state.value)
                    console.log(this.refs.form.refs.textInputRef._lastNativeText)
                }}/>
                <Button buttonStyle={{marginTop:5}} disabled title={'导入的形式--import'} onPress={()=>{
                    console.log(this.props.dispatch)
                    this.props.dispatch(testActions.testAction(this.state.value))
                }}/>
                <Divider style={{height:1,}} />
                <Button buttonStyle={{marginTop:5}} backgroundColor={'red'}  title={'绑定的形式--bind'} onPress={()=>{
                    this.props.actions.testAction(this.state.value)
                }}/>
            </View>
        );
    }

    handlerSkip() {
        this.props.navigator.pop({homeDetails: this.props.test})
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0EFF5'
    }
});

HomeDetails.propTypes = {
    actions: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    ownProps: PropTypes.object
}

function mapStateToProps(state, ownProps) {
    //console.log('--------------------')
    //console.log(state)
    //console.log('--------------------')
    //console.log(ownProps)
    return {
        data: state,
        ownProps
    }
}
function mapDispatchToProps(dispatch,getStore) {
    console.log(arguments)
    //console.log('--------------------')
    //console.log(dispatch)
    console.log('-----------2323---------')
    console.log(getStore)
    return {
        actions: bindActionCreators(testActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeDetails)
//export default connect(mapStateToProps)(HomeDetails)//这个对应this.props.dispatch