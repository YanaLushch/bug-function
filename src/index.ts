interface BigObject {
  [a: string]: { cvalue: number | string | undefined | BigObject } | undefined;
}

function summ(object: BigObject, result = 0): number {
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
    if (typeof value?.cvalue === "number") return (result += value.cvalue);
    if (typeof value?.cvalue === "object")
      return (result = summ(value.cvalue, result));
    if (typeof value?.cvalue === "undefined") return 2021;
  }
  return result;
}
const obj: BigObject = {
  hello: { cvalue: undefined },
  world: { cvalue: { yay: { cvalue: 19 } } },
};
console.log(summ(obj));
