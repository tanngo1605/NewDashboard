import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const LoginScreen = (props) => (
  <View style={styles.container}>
    <View style={styles.brand}>
      <Text style={{ fontSize: 50, color: "#00044b" }}>EDUFLOW</Text>
      <Image
        style={{ height: 200, width: 200 }}
        source={require("../../assets/teacher.svg")}
      />
    </View>

    <View style={styles.loginSection}>
      <Text
        style={{ fontSize: 25, fontWeight: "bold", fontFamily: "sans-serif" }}
      >
        LOG IN
      </Text>
      <View style={styles.inputForm}>
        <Text style={{ fontWeight: "bold", fontFamily: "sans-serif" }}>
          MOBILE OR EMAIL
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your mobile or email"
        />
      </View>
      <View style={styles.inputForm}>
        <View style={{ flexDirection: "row", width: "95%" }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            PASSWORD
          </Text>
          <TouchableOpacity style={{ marginLeft: "auto" }}>
            <Text style={{ color: "brown" }}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          secureTextEntry={true}
          secureTextEntry={true}
          textContentType={"password"}
          style={styles.input}
          placeholder="Enter your password"
        />
      </View>
    </View>
    <View style={{ width: "60vw", borderRadius: 50 }}>
      <Button color="#00044b" title="LOGIN" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  brand: {
    width: "95vw",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  loginSection: {
    width: "95vw",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
  },
  inputForm: {
    width: "100%",
    marginVertical: 20,
    alignItems: "flex-start",
  },
  input: {
    height: 40,
    width: "100%",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 5,
    shadowOpacity: 0.1,
    borderRadius: 10,
  },
});

export default LoginScreen;
