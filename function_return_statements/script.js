const check = function(number) {
    const sum = 0;
    if (sum > 100) {
        return true;
    } else {
        return false;
    }
}

console.log(check);

// functions that produce something

const bouncer = function(maxNum, curNum, age) {
    if (maxNum && curNum >= 100)  {
        return 'its to busy now, come back later';
    } else if (age <=18) {
        return "this is a club for adults";
    } else {
        return "come in";
    }
}

console.log(bouncer(50, 50, 15));

const calc = function(numb1, numb2, numb3, numb4, numb5) {
    const sum = numb1 + numb2 + numb3 + numb4 + numb5;
    return sum / 5;
}

console.log(calc(1, 2, 3, 4, 5));