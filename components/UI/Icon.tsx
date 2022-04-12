import { Entypo } from '@expo/vector-icons';
import React, { memo } from 'react';
import { useTheme } from '@react-navigation/native'

type Props = {
    iconName: keyof typeof Entypo.glyphMap,
};

const Button = ({ iconName }: Props) => {
  const { colors } = useTheme()
  return (
    <Entypo 
      name={iconName} 
      size={24} 
      color={colors.text} 
    />
  )
}

export default memo(Button)
