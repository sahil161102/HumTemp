import React, { Component } from "react";
import {
  View,
  Text
} from "react-native";

export default class TentativeScreen extends React.Component{
    render(){
      return(
        <View style = {{flex:1, justifyContent:"center", alignItems:"center"}}>
        <Text>
        Tentative Screen
        </Text>
        </View>
      );
    }
}