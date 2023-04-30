import { useEffect, useState } from "react";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import NumberPicker from "../component/NumberPicker";
import { MainColor, PointColor } from "../config/styles";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  const [isFill, setIsFill] = useState("");
  const [workoutTitle, setWorkoutTitle] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: MainColor }}>
      <View style={styles.container}>
        <View>
          <Text style={{ fontSize: 40, fontWeight: "bold", color: PointColor }}>
            Stop Watch
          </Text>
          <Text
            style={{
              position: "absolute",
              top: 0,
              left: 4,
              fontSize: 40,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Stop Watch
          </Text>
        </View>
        <View style={{ marginVertical: 30 }}>
          {workoutTitle === "" ? (
            <>
              <View style={styles.inputArea}>
                <TextInput
                  style={styles.inputBox}
                  placeholder="운동 종목을 입력해주세요"
                  placeholderTextColor={"white"}
                  value={isFill}
                  onSubmitEditing={(e) => {
                    setWorkoutTitle(e.nativeEvent.text);
                    {
                      e.nativeEvent.text === "" ? Alert.alert("입력...") : null;
                    }
                  }}
                  onChangeText={(text) => {
                    setIsFill(text);
                  }}
                ></TextInput>
                <TouchableOpacity
                  onPress={() => {
                    setIsFill("");
                  }}
                >
                  <Ionicons
                    name="close-circle-outline"
                    size={30}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <TouchableOpacity
              style={styles.workoutTitle}
              onPress={() => {
                setWorkoutTitle("");
              }}
              activeOpacity={0.5}
            >
              <View>
                <Text style={styles.inputTitle}>{workoutTitle}</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
        <NumberPicker />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: MainColor,
  },
  buttonArea: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 15,
  },
  inputArea: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: PointColor,
    borderRadius: 50,
    padding: 10,
  },
  inputBox: {
    width: "80%",
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },
  inputTitle: {
    marginTop: 20,
    fontSize: 40,
    fontWeight: "800",
    color: "white",
    textAlign: "center",
  },
  workoutTitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
