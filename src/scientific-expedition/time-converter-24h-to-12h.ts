import assert from "assert";

function timeConverter(dayTime: string): string {
  const s: string[] = dayTime.split(':');
  let day: number = parseInt(s[0], 10);
  const m: string = day < 12 ? " a.m." : " p.m.";
  if (day > 12) {
    day -= 12;
  }
  else if (day === 0) {
    day += 12;
  }
  const ret: string = day.toString() + ":" + s[1] + m;
  return ret;
}

assert.equal(timeConverter('12:30'), '12:30 p.m.');
assert.equal(timeConverter('09:00'), '9:00 a.m.');
assert.equal(timeConverter('23:15'), '11:15 p.m.');