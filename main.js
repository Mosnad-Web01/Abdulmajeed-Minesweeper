function mineSweeper(src) {
    const rows = src.length;
    const cols = src[0].length;
    const output = Array.from({ length: rows }, () => Array(cols).fill(0));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (src[i][j] === 1) {
                output[i][j] = 9;
                continue;
            }
            let mineCount = 0;
            for (let x = -1; x <= 1; x++) {
                for (let y = -1; y <= 1; y++) {
                    const newRow = i + x;
                    const newCol = j + y;
                    if (
                        newRow >= 0 &&
                        newRow < rows &&
                        newCol >= 0 &&
                        newCol < cols &&
                        src[newRow][newCol] === 1
                    ) {
                        mineCount++;
                    }
                }
            }
            output[i][j] = mineCount;
        }
    }
    return output;
}

const input = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
];

const output = mineSweeper(input);
console.log(output);
