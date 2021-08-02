interface BigObject {
    [a: string]: {
        cvalue: number | string | undefined | BigObject;
    } | undefined;
}
declare function summ(object: BigObject, result?: number): number;
declare const obj: BigObject;
//# sourceMappingURL=index.d.ts.map