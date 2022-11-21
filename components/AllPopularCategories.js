import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import axios from "axios";

const { width, height } = Dimensions.get("window");

export default AllPopularCategories = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(({data}) => {
        setData(data.info);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        // https://rickandmortyapi.com/api/character
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={(item, index) => {
            console.log("index", index);
            return index.toString();
          }}
          renderItem={({ item }) => {
            console.log("item", item);
            return (
              <View style={styles.item}>
                {/* <Image style={{ height: 180, width: width / 3 }} source={imgURL} /> */}
                <Text style={styles.title}>{item.count}</Text>
                <Text style={styles.title}>{item.pages}</Text>
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    borderColor: "#92E3A9",
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    width: width / 3,
  },
  title: {
    fontSize: 22,
  },
});
