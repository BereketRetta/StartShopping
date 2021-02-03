import React from "react";
import { StyleSheet, ScrollView, Image } from "react-native";
import * as Yup from "yup";
import firebase from "firebase";
// import storage from "@react-native-firebase/storage";

import AppForm from "./AppForm";
import FormField from "./FormField";
import FormPicker from "./FormPicker";
import Submit from "./Submit";
import Screen from "./Screen";
import FormImagePicker from "./FormImagePicker";
const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  { label: "clothing", value: 1 },
  { label: "electronics", value: 2 },
  { label: "HouseHold", value: 3 },
  { label: "fitness", value: 4 },
  { label: "others", value: 5 },
];

function ListingEditScreen({ navigation }) {
  const onSubmitListFirebase = ({
    title,
    price,
    description,
    category,
    images,
  }) => {
    const uploadImage = async (uri, imageName) => {
      const response = await fetch(uri);
      const blob = await response.blob();

      var ref = firebase
        .storage()
        .ref()
        .child("images/" + imageName);
      return ref.put(blob);
    };
    uploadImage(images, title)
      .then(() => {
        console.log("Success");
      })
      .catch((error) => {
        console.log(error);
      });
    firebase
      .firestore()
      .collection("posts")
      .doc("theMainDocID")
      .collection("userPosts")
      .add({
        title,
        price,
        description,
        category,
        email: firebase.auth().currentUser.email,
      })
      .then(function () {
        console.log("Success");
        navigation.navigate("Feed");
      })
      .catch((error) => console.log("error is found", error));
  };
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => onSubmitListFirebase(values)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
        />
        <FormPicker items={categories} name="category" placeholder="Category" />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <Submit title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    alignSelf: "center",
    height: 80,
    width: 80,
  },
});
export default ListingEditScreen;
