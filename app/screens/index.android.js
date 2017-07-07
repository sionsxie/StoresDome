/**
 * Created by Love_xie on 2017/6/26.
 */
import {Navigation} from 'react-native-navigation'
import Home from './Home/Home'
import More from './More/More'
import Mine from './Mine/Mine'
import Shop from './Shop/Shop'

const PACKAGER_NAME = 'com.storesdome.';//包名标示
// register all screens of the app (including internal ones)
function registerScreens() {
    Navigation.registerComponent(PACKAGER_NAME + 'Home', () => Home)
    Navigation.registerComponent(PACKAGER_NAME + 'Shop', () => Shop)
    Navigation.registerComponent(PACKAGER_NAME + 'Mine', () => Mine)
    Navigation.registerComponent(PACKAGER_NAME + 'More', () => More)

}

export {PACKAGER_NAME, registerScreens}