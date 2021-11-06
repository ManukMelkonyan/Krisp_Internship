// Solution of the prolbem with Queue data structure and BFS search algorithm


class QueueNode{
    constructor(x, y, distance, next = null){
        this.x = x;
        this.y = y;
        this.distance = distance;
        this.next = next;
    }
}

class Queue{
    constructor(head = null){
        this.head = head;
        this.tail = head;
    }

    enqueue(node){
        if(!this.head){
            this.head = node;
            this.tail = node;
        }
        else{
            this.tail.next = node;
            this.tail = node;
        }

        return this;
    }

    dequeue(){
        let first = this.head;
        if(this.head){
            this.head = this.head.next;
            if(!this.head){
                this.tail = null;
            }
        }
        return first;
    }
}

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
    let queue = new Queue(new QueueNode(i, j, 0));
    let distance = 0;

    while(queue.head){
        const currentCell = queue.dequeue();
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
                queue.enqueue(new QueueNode(stepI, stepJ, distance + 1));
                board[stepI][stepJ] = true;
            }
        }
    }

    return distance;
}

console.log(minSteps(8, [7, 0], [0, 27]));
console.log(minSteps(10, [1, 2], [9, 0]));
console.log(minSteps(30, [0, 0], [29, 29]));