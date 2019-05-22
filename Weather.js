import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";
const weatherCases = {
  Rain: {
    colors:['#00C6FB', "#005BEA"],
    title: "Raining like a MF",
    subtitle: "For more info look outside",
    icon: "ios-rainy"
  },
  Clear: {
    colors:['#FEF253', "#FF7300"],
    title: "Sunny",
    subtitle: "Go to the outside",
    icon: "ios-sunny"
  },
  Thunderstrorm: {
    colors:['#00ECBC', "#007ADF"],
    title: "Thunderstorm in the house",
    subtitle: "Actually, outside of the house",
    icon: "ios-thunderstorm"
  },
  Clouds: {
    colors:['#D7D2CC', "#304352"],
    title: "Coluds",
    subtitle: "I know, It's boring",
    icon: "ios-cloudy"
  },
  Snow: {
    colors:['#7DE2FC', "#B9B6E5"],
    title: "Cold as balls",
    subtitle: "Do you want to build a snowman?",
    icon: "ios-cloudy"
  },
  Drizzle: {
    colors:['#89F7FE', "#66A6FF"],
    title: "Drizzle",
    subtitle: "Is like rain",
    icon: "ios-rainy-outline"
  },
  Haze: {
    colors:['#89F7FE', "#66A6FF"],
    title: "Haze",
    subtitle: "Be careful",
    icon: "ios-rainy-outline"
  },
}

const Weather = ({ temp, weatherName }) => {
  return (
    <LinearGradient style={styles.container} colors={weatherCases[weatherName].colors}>
      <View style={styles.upper}>
        <Text style={styles.icon}>
          <Ionicons color="white" size={144} name={weatherCases[weatherName].icon} />
        </Text>
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {},
  temp: {
    fontSize: 38,
    backgroundColor: "transparent",
    color: "white",
    marginTop: 10
  },
  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  title: {
    fontSize: 38,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24,
    fontWeight: "300"
  },
  subtitle: {
    fontSize: 24,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24
  }
});