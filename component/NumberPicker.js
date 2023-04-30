import { TouchableOpacity, View } from "react-native";
import { Picker } from "react-native-wheel-pick";
import { Minutes, Seconds, SetData } from "../config/numberData";
import { Text } from "react-native";
import { useState } from "react";
import Timer from "./Timer";
import { MainColor, PointColor } from "../config/styles";
import { StyleSheet } from "react-native";

export default function NumberPicker() {
  const [isVisible, setIsVisible] = useState(false);

  const [work, setWork] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const workNum = work.charAt(0) === "0" ? `${work.charAt(1)}` : `${work}`;
  const minutesNum =
    minutes.charAt(0) === "0" ? `${minutes.charAt(1)}` : `${minutes}`;
  const secondsNum =
    seconds.charAt(0) === "0" ? `${seconds.charAt(1)}` : `${seconds}`;

  return (
    <>
      {isVisible ? (
        <Timer SET={workNum} MINUTES={minutesNum} SECONDS={secondsNum} />
      ) : (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 40,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={styles.settingTexts}>
              {work === 0
                ? "세트"
                : work.charAt(0) === "0"
                ? `${work.charAt(1)} 세트`
                : `${work} 세트`}
            </Text>
            <Picker
              style={{
                backgroundColor: MainColor,
              }}
              pickerData={SetData}
              onValueChange={(value) => {
                setWork(value);
              }}
              itemStyle={styles.innerTexts}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.settingTexts}>
              {minutes === 0
                ? "분"
                : minutes.charAt(0) === "0"
                ? `${minutes.charAt(1)} 분`
                : `${minutes} 분`}
            </Text>
            <Picker
              style={{
                backgroundColor: MainColor,
              }}
              pickerData={Minutes}
              onValueChange={(value) => {
                setMinutes(value);
              }}
              itemStyle={styles.innerTexts}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.settingTexts}>
              {seconds === 0
                ? "초"
                : seconds.charAt(0) === "0"
                ? `${seconds.charAt(1)} 초`
                : `${seconds} 초`}
            </Text>
            <Picker
              style={{
                backgroundColor: MainColor,
              }}
              pickerData={Seconds}
              onValueChange={(value) => {
                setSeconds(value);
              }}
              itemStyle={styles.innerTexts}
            />
          </View>
        </View>
      )}
      {isVisible ? (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            style={styles.settingBtn}
            onPress={() => {
              setIsVisible(false);
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "white",
              }}
            >
              다시 설정
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            style={styles.settingBtn}
            onPress={() => {
              setIsVisible(true);
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "white",
              }}
            >
              세팅 완료
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  settingTexts: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  settingBtn: {
    width: 150,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: PointColor,
    borderColor: PointColor,
    borderWidth: 3,
    borderRadius: 50,
  },
  innerTexts: { color: PointColor, fontWeight: "800" },
});
