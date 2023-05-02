import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PointColor } from "../config/styles";

export default function Timer({ SET, MINUTES, SECONDS }) {
  const [workNum, setWorkNum] = useState(parseInt(SET));
  const [seconds, setSeconds] = useState(parseInt(SECONDS));
  const [minutes, setMinutes] = useState(parseInt(MINUTES));
  const [start, setStart] = useState(false);

  const backCountText = start ? "white" : PointColor;
  const frontCountText = start ? PointColor : "white";

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (seconds === 0 && minutes === 0) {
        clearTimeout(timeoutId);
        setWorkNum((prevSet) => prevSet - 1);
        setSeconds(SECONDS);
        setMinutes(MINUTES);
        setStart(false);
      } else if (seconds === 0) {
        setMinutes((prevMinutes) => prevMinutes - 1);
        setSeconds(59);
      } else {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    if (start) {
      timeoutId;
    } else {
      clearTimeout(timeoutId);
    }
    return () => clearTimeout(timeoutId);
  }, [seconds, minutes, start]);

  return (
    <View style={styles.container}>
      <View style={styles.remainingSet}>
        <Text style={styles.remainingSetText}>{workNum} 세트 남음</Text>
      </View>
      <View style={styles.timer}>
        <View>
          <Text style={{ ...styles.timerText, color: backCountText }}>
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </Text>
          <Text
            style={{
              ...styles.timerText,
              color: frontCountText,
              position: "absolute",
              top: 2,
              left: 3,
            }}
          >
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </Text>
        </View>
      </View>
      {start ? (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={styles.inActiveBtn}>
            <View
              style={{
                ...styles.inActiveBtn,
                borderColor: PointColor,
                width: 80,
                height: 80,
                borderWidth: 6,
              }}
            >
              <Text style={styles.inActiveBtnText}>시작</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.activeBtn}
            onPress={() => {
              setStart(false);
            }}
          >
            <View
              style={{
                ...styles.activeBtn,
                borderColor: PointColor,
                width: 80,
                height: 80,
                borderWidth: 6,
              }}
            >
              <Text style={styles.activeBtnText}>정지</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            style={styles.activeBtn}
            onPress={() => {
              setStart(true);
            }}
          >
            <View
              style={{
                ...styles.activeBtn,
                borderColor: PointColor,
                width: 80,
                height: 80,
                borderWidth: 6,
              }}
            >
              <Text style={styles.activeBtnText}>시작</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.inActiveBtn}>
            <View
              style={{
                ...styles.inActiveBtn,
                borderColor: PointColor,
                width: 80,
                height: 80,
                borderWidth: 6,
              }}
            >
              <Text style={styles.inActiveBtnText}>정지</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  remainingSet: {
    justifyContent: "center",
    alignItems: "center",
  },
  remainingSetText: {
    fontSize: 32,
    fontWeight: 900,
    color: "white",
  },
  timer: {
    width: "100%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: -30,
  },
  timerText: {
    fontSize: 70,
    fontWeight: 900,
    letterSpacing: 4,
  },
  activeBtn: {
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "white",
    backgroundColor: "white",
    width: 90,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 25,
  },
  activeBtnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    letterSpacing: 3,
    textAlign: "center",
  },
  inActiveBtn: {
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "white",
    width: 90,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 25,
  },
  inActiveBtnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
    letterSpacing: 3,
    textAlign: "center",
  },
});
