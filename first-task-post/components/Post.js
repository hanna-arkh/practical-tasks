import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Image,
  View,
  Text,
  StyleSheet,
  PixelRatio,
} from "react-native";

export default function Post() {
  const pixels = PixelRatio.get();
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("../assets/avatar.png")}
            style={styles.avatarIcon}
            resizeMode="contain"
          />
          <Text style={[{ fontSize: pixels * 6 }, styles.name]}>
            name_surname
          </Text>
        </View>
        <View>
          <Image
            source={require("../assets/priroda.png")}
            resizeMode="cover"
            style={styles.mainPic}
          />
        </View>
        <View style={styles.textContent}>
          <View style={styles.feedback}>
            <Image
              source={require("../assets/like.png")}
              style={styles.icons}
              resizeMode="contain"
            />
            <Image
              source={require("../assets/comment.png")}
              style={styles.icons}
              resizeMode="contain"
            />
            <Image
              source={require("../assets/save.png")}
              style={[styles.icons, styles.saveIcon]}
              resizeMode="contain"
            />
          </View>
          <View>
            <Text style={styles.name}>name_surname</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              malesuada sagittis feugiat. Morbi ipsum tellus, dictum ac lorem
              vel, blandit porttitor mauris. Phasellus ac imperdiet nunc, quis
              bibendum massa. Vestibulum id consectetur odio. Ut vitae
              vestibulum sapien, tincidunt maximus elit. Etiam fermentum ante ac
              nisl pulvinar, porta aliquam est condimentum. Donec et faucibus
              nisl, in scelerisque ligula. Ut at consequat urna. Sed dapibus
              fringilla libero sit amet molestie. Nullam convallis cursus
              finibus. Nunc ac massa egestas, consequat diam ac, rutrum dolor.
              Praesent tincidunt magna justo, vitae congue nibh viverra sed.
              Vivamus id commodo tortor, vitae lacinia risus. Vivamus eu lorem
              nec metus egestas dictum vitae at nisi. Pellentesque efficitur,
              nibh sed finibus pharetra, dolor sem commodo sapien, consectetur
              pretium velit nulla a enim.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainPic: {
    width: "100%",
    height: 400,
  },
  container: {
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  feedback: {
    flexDirection: "row",
    backgroundColor: "white",
  },
  saveIcon: {
    marginLeft: "auto",
  },
  icons: {
    width: 50,
    height: 50,
    paddingRight: 15,
  },
  name: {
    fontWeight: "bold",
  },
  textContent: {
    paddingHorizontal: 10,
  },
  avatarIcon: {
    width: 60,
    height: 60,
  },
});
