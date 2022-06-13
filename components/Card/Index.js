import React from "react";
import {View, Text} from 'react-native';
import styles from './style';

export default function Card( {titulo, children } ) {

    return(

        <View style={styles.card}> 
        <View style={styles.cardHeader}>
          <Text>{titulo}</Text>
        </View>
        <View style={styles.cardContent}>
            {children}
        </View>
      </View>

    );

}

