import { Entypo } from '@expo/vector-icons';
import React from 'react';

type Props = {
    iconName: keyof typeof Entypo.glyphMap,
    color: string
};

const Button = ({ iconName, color }: Props) => {
  return (
    <Entypo 
        name={iconName} 
        size={24} 
        color={color} 
    />
  );
};

export default Button
