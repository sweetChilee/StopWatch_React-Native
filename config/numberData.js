export const SetData = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
];
export let Minutes = [];
{
  (() => {
    for (let i = 0; i < 11; i++) {
      if (i < 10) {
        Minutes.push(`0${i}`);
      } else {
        Minutes.push(`${i}`);
      }
    }
  })();
}

export let Seconds = [];
{
  (() => {
    for (let i = 0; i < 60; i++) {
      if (i < 10) {
        Seconds.push(`0${i}`);
      } else {
        Seconds.push(`${i}`);
      }
    }
  })();
}
