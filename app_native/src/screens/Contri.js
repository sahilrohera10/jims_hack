// CreateContriRoomScreen.js
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { Modal, Portal, Button, PaperProvider } from "react-native-paper";
// import Box from "@mui/material/Box";
import RNPickerSelect from "react-native-picker-select";
import { TextInput } from "react-native-paper";
import MultiSelect from "react-native-multiple-select";

const items = [
  {
    id: "92iijs7yta",
    name: "Sahil Arora",
  },
  {
    id: "a0s0a8ssbsd",
    name: "Yash Singhal",
  },
  {
    id: "16hbajsabsd",
    name: "Yash Raj Hans",
  },
];

const Contri = ({ navigation }) => {
  const handleCreateRoom = () => {
    // Handle the logic for creating a contribution room
    // You can navigate to another screen or perform any other actions
  };

  const [selectedItems, setSelectedItems] = useState([]);
  const multiSelectRef = useRef(null);

  const onSelectedItemsChange = (mem) => {
    // Map selected items to include both id and name
    const selectedItemsWithNames = mem.map((id) =>
      items.find((item) => item.id === id)
    );
    setSelectedItems(selectedItemsWithNames);
    console.log("items", selectedItemsWithNames);
  };

  const [text, setText] = React.useState("");

  //   const [age, setAge] = React.useState("");

  //   const handleChange = (event) => {
  //     setAge(event.target.value);
  //   };

  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    height: "60%",
  };

  const contributionRoomsData = [
    { id: 1, name: "Trip to Goa", members: 4 },
    { id: 2, name: "House Rent", members: 2 },
    { id: 3, name: "Trip to Goa", members: 4 },
    //   { id: 4, name: "House Rent", members: 2 },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.createButton} onPress={showModal}>
        <Text style={styles.buttonText}>Create Contri Room</Text>
      </TouchableOpacity>
      {/* Add other content for your screen below */}
      <View style={{ height: "43%", marginTop: 30 }}>
        <Text style={[styles.userName, { marginBottom: 10, color: "#EEC050" }]}>
          Ongoing contri rooms
        </Text>
        <FlatList
          data={contributionRoomsData}
          renderItem={({ item }) => (
            <View style={styles.contributionRoomItem}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}
                >
                  {item.name}
                </Text>
                <Text style={{ color: "#EEC050" }}>Total: $20</Text>
              </View>
              {/* Display other contribution room details */}
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View style={{ height: "43%", marginTop: 10 }}>
        <Text style={[styles.userName, { marginBottom: 10, color: "#EEC050" }]}>
          Settled contri rooms
        </Text>
        <FlatList
          data={contributionRoomsData}
          renderItem={({ item }) => (
            <View style={styles.contributionRoomItem}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}
                >
                  {item.name}
                </Text>
                <Text style={{ color: "#EEC050" }}>Total: $20</Text>
              </View>
              {/* Display other contribution room details */}
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          {/* <Box sx={{ minWidth: 120 }}> */}
          <Text>Create Contri Room</Text>
          <TextInput
            label="Contri Room Name"
            value={text}
            onChangeText={(text) => setText(text)}
          />
          <View style={{ flex: 1 }}>
            <MultiSelect
              hideTags
              items={items}
              uniqueKey="id"
              ref={multiSelectRef}
              onSelectedItemsChange={onSelectedItemsChange}
              selectedItems={selectedItems.map((item) => item.id)} // Pass only ids to the MultiSelect component
              selectText="Pick members"
              searchInputPlaceholderText="Search Items..."
              onChangeInput={(text) => console.log(text)}
              tagRemoveIconColor="#CCC"
              tagBorderColor="#CCC"
              tagTextColor="#CCC"
              selectedItemTextColor="#CCC"
              selectedItemIconColor="#CCC"
              itemTextColor="#000"
              displayKey="name"
              searchInputStyle={{ color: "#CCC" }}
              submitButtonColor="#CCC"
              submitButtonText="Submit"
            />
            <View>
              {multiSelectRef.current &&
                multiSelectRef.current.getSelectedItemsExt(selectedItems)}
            </View>
          </View>
          {/* </Box> */}
          <TouchableOpacity style={styles.createButton} onPress={showModal}>
            <Text style={styles.buttonText}>Create Contri Room</Text>
          </TouchableOpacity>
        </Modal>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212", // Set your desired background color
    padding: 20,
  },
  createButton: {
    width: "100%",
    backgroundColor: "#262626",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  contributionRoomItem: {
    backgroundColor: "#262626", // Dark gray background
    padding: 16, // Spacing around the content
    borderRadius: 8, // Rounded corners
    marginBottom: 8, // Margin between items
  },
});

export default Contri;
