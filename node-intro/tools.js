function add(a,b){
    return a + b;
}

function averageScore(scores){
    let total = 0;
    for(let score of scores){
        total += score;
    }
    return total / scores.length;
}

const PASSING_SCORE = 60;

module.exports = {add, averageScore, PASSING_SCORE};