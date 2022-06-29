// A child can go up n stairs in 1,2 or 3 stairs at a time. How many different ways can you jump up the stairs?

const solution = (n) => {
    const stairs = new Array(n + 2);
    
    stairs[0] = 1;
    stairs[1] = 1;
    stairs[2] = 2;
    //console.log(stairs)
    for (let i = 3; i <= n; i++){
        stairs[i] = stairs[i - 1] + stairs[i - 2] + stairs[i - 3];
        console.log(stairs)
    }
    return stairs[n];
};

console.log(solution(3))

