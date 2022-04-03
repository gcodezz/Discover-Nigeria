import { Platform, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import {ElementType} from 'react'

const TouchableCmp: ElementType = 
    Platform.OS === 'android' && Platform.Version >= 21 ? 
        TouchableNativeFeedback 
        : TouchableOpacity;

export default TouchableCmp