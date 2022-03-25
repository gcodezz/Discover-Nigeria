import { 
    StyleSheet, 
    Text, 
    View, 
    Platform, 
    TouchableNativeFeedback, 
    TouchableOpacity 
} from 'react-native';
import React from 'react';

type Props = {
    title: string
    onSelect: () => void
    morePadding: boolean
    flex: number
};

const GridTile = (props: Props) => {
    const TouchableCmp: React.ElementType = 
        Platform.OS === 'android' && Platform.Version >= 21 ? 
            TouchableNativeFeedback 
            : TouchableOpacity
    const margin = props.morePadding && { paddingVertical: 5 }

  return (
    <View style={{...styles.gridItem, flex: props.flex}}>
        <TouchableCmp onPress={props.onSelect} style={styles.shadow}>
            <View style={styles.titleContainer}>
                <Text style={{...styles.title, ...margin}} numberOfLines={1}>
                    {props.title}
                </Text>
            </View>
        </TouchableCmp>
    </View>
  );
};

export default GridTile;

const styles = StyleSheet.create({
    gridItem: {
        margin: 10,
        shadowColor: "#000000",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        },

        overflow: 'hidden',
        borderRadius: 10,
        borderColor: '#888',
        borderWidth: 0.5,
        backgroundColor: '#FFF',
        elevation: 4
    },
    shadow: {
        flex: 1
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'KarlaMedium'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 10
    }
});
