//task 1
function fizzBuzz(){
    let result= "";
    let resultArr = [];
    for(let i = 1 ; i<= 100; i++){
        result = ((i % 3 == 0 && i % 5 == 0 ) && "FizzBuzz")||(i % 3 == 0 && "Fizz") || (i % 5 == 0 && "buzz")|| i;
        resultArr.push(result);
    }
    return resultArr;
}
console.log(fizzBuzz());

function fizzBuzzObj(){
    const fizzBuzzMap = {
        "0-0": "FizzBuzz",
        "0-3": "Fizz",
        "2-0": "Buzz",
    };
    let resultArr = [];
    for(let i = 1 ; i<= 100; i++){
        const key = `${i % 3}-${i % 5}`;
        let result  = fizzBuzzMap[key] || i;
        resultArr.push(result);
    }
    return  resultArr;
}
 

console.log(fizzBuzzObj());

//task 2 
function isPalindrom(text){
    if(!text) return;
    let result  = "";
    const lowerCaseText = text.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedText = lowerCaseText.split("").reverse().join("");

    lowerCaseText === reversedText ? result = `${text} is Palindrom`: result = `${text}  isn't Palindrom`;
    return result
}
console.log(isPalindrom("hello"));
console.log(isPalindrom("No, it can, as it is, it is a war. Raw as it is, it is an action."));
console.log(isPalindrom("Mom"));

//task3
function drawCalendar(year, month){
    if(!year && !month)return "Enter valid numbers!!";

    const receivedDate = new Date(year,month-1,1);
    const monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dateYear = receivedDate.getFullYear();
    const dateMonth = receivedDate.getMonth();


    const wrapper = document.querySelector(".wrapper");

    const calendarWrapper = document.createElement("div");
    calendarWrapper.className = "calendar_wrapper";

    const yearMonth = document.createElement("h2");
    yearMonth.textContent = `Year:${dateYear}\n Month:${monthsList[dateMonth]}`;

    calendarWrapper.appendChild(yearMonth);
    wrapper.appendChild(calendarWrapper);
    
    return "Calendar is ready."
};


console.log(drawCalendar(2011,12));

//task 4
function readValues(obj){
    const valuesInObj = Object.values(obj).sort();
    const stringValue = JSON.stringify(valuesInObj);
    return stringValue
}

function isDeepEqual(obj_one, obj_two, func){
    if(typeof obj_one !== "object" && typeof obj_two !== "object")return;
    const valuesOfObj_one = func(obj_one);
    const valuesOfObj_two = func(obj_two);
  
    return valuesOfObj_one == valuesOfObj_two;
}
const a = { prop1: 1, list: [1, 2, 3], o: { x: 2 } };
const b = { list: [1, 2, 3], o: { x: 2 } };
console.log(isDeepEqual(a, b,readValues)); // false
b.prop1 = 1;
console.log(isDeepEqual(a, b,readValues)); // true


//task 5 
function spiral(arr){
    let dimensionalArr = []
    let startRowIndex = 0, startColIndex = 0;
    let endRowIndex = arr.length;
    let endColIndex = arr[0].length;

    if(arr.length == 0 ) return dimensionalArr;

    while(startRowIndex < endRowIndex && startColIndex < endColIndex) {
        for(let i = startColIndex; i < endColIndex; ++i) {
            dimensionalArr.push(arr[startRowIndex][i]);
        }
        startRowIndex++;

        for(let i = startRowIndex; i < endRowIndex; ++i) {
            dimensionalArr.push(arr[i][endColIndex - 1]);
        }
        endColIndex--;

        if(startRowIndex < endRowIndex) {
            for(i = endColIndex - 1; i >= startColIndex; --i) {
                dimensionalArr.push(arr[endRowIndex - 1][i]);
            }
            endRowIndex--;
        }

       
        if(startColIndex < endColIndex) {
           for(i = endRowIndex - 1; i >= startRowIndex; --i) {
                dimensionalArr.push(arr[i][startColIndex]);
           }
           startColIndex++;
        }
   }
   return dimensionalArr
}

console.log(spiral([[4, 5], [6, 7]])); // [4,5,7,6]
console.log(spiral([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [1,2,3,6,7,8,7,4,5]
console.log(spiral([
[1, 2, 3, 4, 5],
[6, 7, 8, 9, 10],
[11, 12, 13, 14, 15],
[16, 17, 18, 19, 20]
])); // [1,2,3,4,5,10,15,20,19,18,17,16,11,6,7,8,9,14,13,12]


//task 6
function quadraticEquation(a,b,c){
    if(a == 0) { 
        return "There is no solution";
    }

    let rootsArr = [];
    let discriminant = b * b - 4 * a * c;
    let sqrt_val = Math.sqrt(Math.abs(discriminant));
 
    if(discriminant > 0) {
        rootsArr.push((-b + sqrt_val) / (2 * a) ,(-b - sqrt_val) / (2 * a));
        return rootsArr;
    }else if(discriminant == 0) {
        rootsArr.push(-b / (2 * a));
        return rootsArr;               
    }else{ return rootsArr}
  
}
console.log(quadraticEquation(2, -8, 72)); // x^2 - 8*x + 72 -> []
console.log(quadraticEquation(1, 12, 36)); // x^2 + 12*x + 36 -> [-6]
console.log(quadraticEquation(1, 6, 1)); // 1*x^2 + 6*x + 1 -> [-0.1715728752538097,-5.82842712474619]