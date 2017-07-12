import {Navigation} from 'react-native-navigation'

import {PACKAGER_NAME, registerScreens} from './screens/index'
//test redux
import {Provider} from 'react-redux'
import configureStore from './redux/createStore'

const store = configureStore()
// this is where you register all of your app's screens
registerScreens(store,Provider)

const createTabs = () => {
    let tabs = [
        {
            label: '首页',
            screen: PACKAGER_NAME + 'Home', // this is a registered name for a screen
            icon: require('./img/icon_tabbar_homepage.png'),
            selectedIcon: require('./img/icon_tabbar_homepage_selected.png'), // iOS only
            title: '首页',
            navigatorStyle: {
                navBarHidden: true,//使导航栏隐藏
            },//覆盖标签屏幕的导航器样式，请参阅下面的“定制导航器”（可选），
            navigatorButtons: {} //覆盖标签屏幕的导航按钮，请参阅下面的“将按钮添加到导航器”（可选）
        },
        {
            label: '商家',
            screen: PACKAGER_NAME + 'Shop', // this is a registered name for a screen
            icon: require('./img/icon_tabbar_merchant_normal.png'),
            selectedIcon: require('./img/icon_tabbar_merchant_selected.png'), // iOS only
            title: '商家',
            navigatorStyle: {},//覆盖标签屏幕的导航器样式，请参阅下面的“定制导航器”（可选），
            navigatorButtons: {
                leftButtons: [
                    {
                        icon: require('./img/icon_shop_local.png'),
                        title: 'map',
                        buttonFontSize: 14,
                        buttonFontWeight: 600,
                        id: 'map'
                    }
                ],
                rightButtons: [
                    {
                        icon: require('./img/icon_shop_search.png'),
                        title: 'search',
                        buttonFontSize: 14,
                        buttonFontWeight: 600,
                        id: 'search'
                    },
                ]
            } //覆盖标签屏幕的导航按钮，请参阅下面的“将按钮添加到导航器”（可选）
        },
        {
            label: '我的',
            screen: PACKAGER_NAME + 'Mine', // this is a registered name for a screen
            icon: require('./img/icon_tabbar_mine.png'),
            selectedIcon: require('./img/icon_tabbar_mine_selected.png'), // iOS only
            title: '我的',
            navigatorStyle: {//覆盖标签屏幕的导航器样式，请参阅下面的“定制导航器”（可选），
                navBarHidden: true,//使导航栏隐藏
            },
            navigatorButtons: {} //覆盖标签屏幕的导航按钮，请参阅下面的“将按钮添加到导航器”（可选）
        },
        {
            label: '更多',
            screen: PACKAGER_NAME + 'More', // this is a registered name for a screen
            icon: require('./img/icon_tabbar_misc.png'),
            selectedIcon: require('./img/icon_tabbar_misc_selected.png'), // iOS only
            title: '更多',
            navigatorStyle: {},//覆盖标签屏幕的导航器样式，请参阅下面的“定制导航器”（可选），
            navigatorButtons: {
                rightButtons: [
                    {
                        icon: require('./img/icon_mine_setting.png'),
                        title: 'setting',
                        buttonFontSize: 14,
                        buttonFontWeight: 600,
                        id: 'setting'
                    }
                ]
            } //覆盖标签屏幕的导航按钮，请参阅下面的“将按钮添加到导航器”（可选）
        }
    ]
    return tabs;
}
const createAppStyle = () => {
    let appStyles = {
        //常见
        navBarHidden: false,//使导航栏隐藏
        navBarTextColor: '#FFFFFF',//更改标题的文本颜色（记住跨推）
        // navBarTextFontFamily: 'font-name',//更改标题字体
        navBarBackgroundColor: '#EB6814',//更改导航栏的背景颜色（记住跨推）
        navBarButtonColor: '#FFFFFF',//更改导航栏按钮的颜色（例如，后退按钮）（记住跨推）
        navBarHideOnScroll: false,//使导航栏仅在用户开始滚动后隐藏

        //tabBarButtonColor: '#ABABAB',//可选，更改选项卡图标和文本的颜色（也未选择）
        //tabBarSelectedButtonColor: '#EB6814',//可选，//可选，更改标签栏的背景颜色
        //tabBarBackgroundColor: '#F8F8F8',//可选，更改标签栏的背景颜色 底部导航颜色
        // tabFontFamily: 'BioRhyme-Bold',//更改标签字体系列
        tabBarTranslucent: true, //将选项卡栏的半透明更改为false
        tabBarHidden: false,//使屏幕内容隐藏标签栏（记住跨推）底部导航隐藏

        //仅限Android
        navBarTitleTextCentered: true,// default：false。中心标题。
        topBarElevationShadowEnabled: true,// default：true。禁用在Lolipop及以上的TopBar高程阴影
        statusBarColor: '#EB6814',//更改状态栏的颜色。
        forceTitlesDisplay: true,//仅限Android。如果为真 - 显示所有底部标签标签。如果为false - 只显示所选标签的标签。

        statusBarTextColorScheme: 'light',//状态栏的文本颜色，'dark'/'light'（记住跨过的按钮）

        drawUnderNavBar: true,//绘制导航栏下的屏幕内容，最好使用
        drawUnderTabBar: false, //绘制标签栏下的屏幕内容（标签栏总是半透明的）

        orientation: 'portrait', //设置整个应用程序的特定方向。默认值：'auto'。支持的值：'auto'，'landscape'，'portrait'

        backgroundColor: '#F0EFF5'//
    };
    return appStyles;
};

const createDrawer = () => {
    let drawer = {
        left: {
            screen: PACKAGER_NAME + 'Home'
        },
        right: {
            screen: PACKAGER_NAME + 'Home'
        },
        disableOpenGesture: true //可选，可以通过滑动而不是按钮打开抽屉(是否禁用滑动手势)
    }
    return drawer
}
// start the app
Navigation.startTabBasedApp({
    tabs: createTabs(),
    appStyle: createAppStyle(),
    drawer: createDrawer(),
    tabsStyle:{
        tabBarButtonColor: '#ABABAB',//可选，更改选项卡图标和文本的颜色（也未选择）
        tabBarSelectedButtonColor: '#EB6814',//可选，//可选，更改标签栏的背景颜色
        tabBarBackgroundColor: '#F8F8F8',//可选，更改标签栏的背景颜色 底部导航颜色
    },
    passProps: {PACKAGER_NAME},//简单的可序列化对象，将作为道具传递到所有顶层屏幕（可选）
    animationType: 'fade' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
});