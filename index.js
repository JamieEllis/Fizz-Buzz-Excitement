for (number = 1; number <= 255; ++number) {
    let multOfThree = number % 3 === 0;
    let multOfFive = number % 5 === 0;
    let multOfSeven = number % 7 === 0;
    let multOfEleven = number % 11 === 0;
    let multOfThirteen = number % 13 === 0;
    let multOfSeventeen = number % 17 === 0;
    let outArray = []
    let output = '';
    if (multOfEleven) {
        if (multOfThirteen) {
            outArray.push('Fezz');
        }
        outArray.push('Bong');
    }
    else {
        if (multOfThree) {
            outArray.push('Fizz');
        }
        if (multOfThirteen) {
            outArray.push('Fezz');
        }
        if (multOfFive) {
            outArray.push('Buzz');
        }
        if (multOfSeven) {
            outArray.push('Bang');
        }
        if (!multOfThree && !multOfFive && !multOfSeven && !multOfThirteen) {
            output = number;
        }
    }
    if (multOfSeventeen) {
        for (index = outArray.length - 1; index >= 0; --index) {
            output += outArray[index];
        }
    }
    else {
        for (index = 0; index < outArray.length; ++index) {
            output += outArray[index];
        }
    }
    console.log(output);
}