import { Platform, Pressable, TouchableOpacity } from 'react-native';
import { ElementType } from 'react';

const TouchableCmp: ElementType =
  Platform.OS === 'android' && Platform.Version >= 21 ? Pressable : TouchableOpacity;

export default TouchableCmp;
