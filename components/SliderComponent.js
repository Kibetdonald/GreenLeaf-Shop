import React from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";
import ViewSlider from "react-native-view-slider";

const { width, height } = Dimensions.get("window");

function SliderComponent() {
  const Indicators = 2;
  return (
    <>
      <ViewSlider
        renderSlides={
          <>
            <View style={styles.viewBox}>
              <Image
                source={{
                  uri: "https://hips.hearstapps.com/clv.h-cdn.co/assets/15/10/1425667253-nursery-shopping.jpg",
                }}
                style={{ height: 200, width}}
              />
            </View>
            <View style={styles.viewBox}>
              <Image
                style={{ height: 200, width }}
                source={require("../assets/images/slide5.jpg")}
              />
            </View>
            <View style={styles.viewBox}>
              <Image
                style={{ height: 200, width }}
                source={require("../assets/images/slide4.jpg")}
              />
            </View>

            <View style={styles.viewBox}>
              <Image
                style={{ height: 200, width }}
                source={require("../assets/images/slide2.jpg")}
              />
            </View>
            <View style={styles.viewBox}>
              <Image
                style={{ height: 200, width }}
                source={require("../assets/images/slide1.jpg")}
              />
            </View>
          </>
        }
        style={styles.slider}
        height={200}
        slideCount={5}
        dots={true}
        dotActiveColor="red"
        dotInactiveColor="gray"
        dotsContainerStyle={styles.dotContainer}
        autoSlide={true}
        slideInterval={3000}
      />
    </>
  );
}

const styles = StyleSheet.create({
  viewBox: {
    paddingHorizontal: 20,
    justifyContent: "center",
    width: width,
    padding: 10,
    alignItems: "center",
    height: 150,
    borderRadius: 20,
  },
  slider: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "85%",
    paddingTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },
  dotContainer: {
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 15,
  },
});

export default SliderComponent;
