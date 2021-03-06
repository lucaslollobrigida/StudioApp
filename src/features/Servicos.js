import React, { Component } from 'react';
import {  View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
 } from 'react-native';

export default class Servicos extends Component {
  render() {
    return (
    <View style={styles.boxContainer}>
        
        <View style={styles.boxHeader}>
            <Text style={styles.texto}> Adicionar Serviço/ Produto </Text>
        </View>
        
        <View style={styles.boxBody}>
            
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    Serviço   
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    Produto
                </Text>
            </TouchableOpacity>
        </View>

    </View>
    );
  }
}

const styles = StyleSheet.create({
boxContainer: {
    flex: 1,
    height: 150,
    width: 400,
},

boxHeader: {
    flex: 1,
    backgroundColor: '#1E90FF',
    alignItems: 'center',
},

boxBody: {
    flex: 8,
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#DCDCDC',
    height: 300,
},

texto:{
    fontSize: 26,
    color: 'black',
},

button:{
    justifyContent: 'center',
    height: 100,
    width: 100,
    fontSize: 16,
    alignItems: 'center',
    marginLeft: 55,
  },
  
buttonText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 22,
    alignItems: 'center',
},

});