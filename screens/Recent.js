import React, { Component } from "react";
import {
  View,
  Text
} from "react-native";

export default class RecentScreen extends React.Component{
    render(){
      return(
        <View style = {{flex:1, justifyContent:"center", alignItems:"center"}}>
        <Text>
        Recent Screen
        </Text>
        </View>
      );
    }
}