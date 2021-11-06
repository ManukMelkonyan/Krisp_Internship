// Solution of the prolbem with native Array and BFS search algorithm

function isValid(x, y, n){
    return (x >= 0 && x < n && y >= 0 && y < n);
}

function getAllPossibleStepsForKnight(x, y, n){
    const possibleSteps = [];
    const horizontalMoves = [1,  1, -1, -1, 2,  2, -2, -2];
    const verticalMoves   = [2, -2,  2, -2, 1, -1,  1, -1];
    for(let i = 0; i < 8; ++i){
        let currentX = x + horizontalMoves[i];
        let currentY = y + verticalMoves[i];
        if(isValid(currentX, currentY, n)){
            possibleSteps.push([currentX, currentY]);
        }
    }

    return possibleSteps;
}

function minSteps(n, source, destination){
    let i = source[0];
    let j = source[1];
    const board = new Array(n);
    for(let i = 0; i < n; ++i){
        board[i] = (new Array(n)).fill(false);
    }
    board[i][j] = true;
    let queue = [{x: i, y: j, distance: 0}];
    let distance = 0;

    while(queue.length){
        const currentCell = queue.shift();
        distance = currentCell.distance;
        i = currentCell.x;
        j = currentCell.y;

        if(i === destination[0] && j === destination[1]){
            return distance;
        }

        const possibleSteps = getAllPossibleStepsForKnight(i, j, n);
        
        for(let step of possibleSteps){
            let stepI = step[0];
            let stepJ = step[1];
            if(!board[stepI][stepJ]){
                queue.push({x: stepI, y:stepJ, distance: distance + 1});
                board[stepI][stepJ] = true;
            }
        }
    }

    return distance;
}
// console.log(minSteps(6, [1, 1], [4, 5]));
console.log(minSteps(8, [7, 0], [0, 27]));
console.log(minSteps(10, [1, 2], [9, 0]));
console.log(minSteps(30, [0, 0], [29, 29]));