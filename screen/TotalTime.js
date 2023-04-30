import { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MainColor, PointColor } from "../config/styles";

export default function TotalTime() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const [start, setStart] = useState(false);

  {
    start
      ? useEffect(() => {
          const stopWatch = setTimeout(() => {
            setSeconds((seconds) => {
              if (seconds === 59) {
                setMinutes((minutes) => {
                  if (minutes === 59) {
                    setHours((hours) => {
                      hours + 1;
                    });
                  }
                  return (minutes + 1) % 60;
                });
              }
              return (seconds + 1) % 60;
            });
          }, 1000);
          return () => clearTimeout(stopWatch);
        }, [() => seconds])
      : useEffect(() => {}, [() => seconds]);
  }

  const startBtn = (title, isStart, outlineColor, innerColor, brColor) => {
    return (
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 95,
          height: 95,
          backgroundColor: outlineColor,
          borderRadius: 100,
          borderWidth: 5,
          borderColor: brColor,
        }}
        onPress={isStart}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 72,
            height: 72,
            borderRadius: 100,
            backgroundColor: innerColor,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "600" }}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View>
          <Text style={{ fontSize: 50, fontWeight: "900", color: PointColor }}>
            Total Time
          </Text>
          <Text
            style={{
              fontSize: 50,
              fontWeight: "900",
              color: "white",
              position: "absolute",
              top: 0,
              left: 4,
            }}
          >
            Total Time
          </Text>
        </View>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View>
          <Text
            style={{
              fontSize: 65,
              fontWeight: "800",
              color: PointColor,
              marginVertical: 50,
              letterSpacing: 5,
            }}
          >
            {hours < 10 ? `0${hours}` : hours}:
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </Text>
          <Text
            style={{
              fontSize: 65,
              fontWeight: "800",
              color: "white",
              marginVertical: 50,
              letterSpacing: 5,
              position: "absolute",
              top: 0,
              left: 4,
            }}
          >
            {hours < 10 ? `0${hours}` : hours}:
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </Text>
        </View>
      </View>
      <View style={styles.buttonArea}>
        {start
          ? startBtn(
              "종료",
              () => {
                setStart(false);
              },
              "white",
              PointColor,
              PointColor
            )
          : startBtn(
              "시작",
              () => {
                setStart(true);
              },
              PointColor,
              "white",
              "white"
            )}
        <View>
          {startBtn(
            "초기화",
            () => {
              setSeconds(0);
              setMinutes(0);
              setHours(0);
              setStart(false);
            },
            "lightcoral",
            "white",
            "white"
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: MainColor,
  },
  buttonArea: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    marginVertical: 15,
  },
});
