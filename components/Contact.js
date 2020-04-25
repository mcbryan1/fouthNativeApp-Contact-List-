import React from 'react'
import { StyleSheet, Text, View, Image, } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'


export default function Contact ({name, phone}) {
        return (
            <View style={styles.container}>
                <Image 
                    source={require('../assets/picture.png')} 
                    style={styles.image}
                    />
                <View style={styles.text__container}>
                    <Text style={styles.text__container__name} numberOfLines={1}>{name}</Text>
                    <Text>{phone}</Text>
                </View>
                <View style={styles.icons}>
                    <MaterialIcons name="local-phone" size={22} color="#088ccf" />
                </View>
                <View style={styles.icons}>
                    <MaterialCommunityIcons name="message-processing" size={22} color="#088ccf" />
                </View>
                <View style={styles.icons}>
                    <SimpleLineIcons name="options-vertical" size={22} color="#a3a3a3" />
                </View>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginHorizontal: 20,
      alignItems: 'center',
      paddingVertical: 7,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    text__container:{
        justifyContent: 'center',
        marginHorizontal: 15,
        flex: 5,
    },
    text__container__name:{
        fontWeight: 'bold',
        fontSize: 17,
    },
    icons: {
        flex: 1,
    }
  });