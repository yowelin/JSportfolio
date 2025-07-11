const transpose = m => m[0].map((_, i) => m.map(row => row[i]));

let mTable = [];
const cellsNum = 10;
const colNum = 5;
let colCounter = 0;
let tempRow;
for (let i = 0; i < cellsNum; i++) {
    if (colCounter % colNum == 0) {
        colCounter = 0;
        tempRow = [];
        if (tempRow != undefined) {
            mTable.push(tempRow);
        }
    }
    tempRow.push([]);
    for (let j = 0; j < 10; j++) {
        tempRow[colCounter].push(`${i + 1} * ${j + 1} = ${(i + 1) * (j + 1)}`);
    }
    colCounter++;
}
for (i = 0; i < mTable.length; i++) {
    const transposed = transpose(mTable[i]);
    console.table(transposed);
}
