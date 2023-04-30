import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

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

  const startBtn = (title, isStart) => {
    return (
      <Text style={{ fontSize: 20, fontWeight: "600" }} onPress={isStart}>
        {title}
      </Text>
    );
  };
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 32, fontWeight: "900" }}>총 시간</Text>
      </View>
      <View style={styles.buttonArea}>
        {start
          ? startBtn("종료", () => {
              setStart(false);
            })
          : startBtn("시작", () => {
              setStart(true);
            })}
        {startBtn("저장 및 초기화", () => {
          setSeconds(0);
          setMinutes(0);
          setHours(0);
          setStart(false);
        })}
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 40, fontWeight: "600" }}>
          {hours < 10 ? `0${hours}` : hours}:
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  },
  inputBox: {
    width: "80%",
    textAlign: "center",
    fontSize: 20,
  },
  inputTitle: {
    fontSize: 40,
    fontWeight: "800",
  },
  titleResetBtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  resetTitleText: {
    textAlign: "center",
    width: 100,
    height: 20,
    backgroundColor: "tomato",
  },
});
