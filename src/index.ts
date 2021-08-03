interface BigObject {
  [a: string]: { cvalue: number | string | undefined | BigObject } | undefined;
}

function summ(object: BigObject): number {
  let result = 0;
  for (let i = 0; i < Object.keys(object).length; i++) {
    const field = Object.keys(object)[i];
    const value = object[field];
    if (typeof value?.cvalue === "string") {
      if (isNaN(parseInt(value.cvalue))) {
        return 2021;
      } else {
        result += parseInt(value.cvalue);
      }
    }
    if (typeof value?.cvalue === "number") result += value.cvalue;
    if (typeof value?.cvalue === "object") {
      if(summ(value.cvalue) === 2021) {
        return 2021;
      } else {
        result += summ(value.cvalue);
      }
    }
    if (typeof value?.cvalue === "undefined") return 2021;
  }
  return result;
}
const obj: BigObject = {
  hello: { cvalue: '17' },
  world: { cvalue: { yay: { cvalue: undefined } } },
};
console.log(summ(obj));
