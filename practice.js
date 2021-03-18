//Q1
function greatest(candies, extraCandies) {  
    let answer = [];     
    for(let i = 0; i < candies.length; i++){      
    let kidsWithExtra = candies[i] + extraCandies;   
    if (Math.max(...candies) <= kidsWithExtra){
    answer[i] = true;         
    }else {
    answer[i] = false;
  } 
 }    
return answer
}

//Q2

// const arr = [1,2,3,4,5]
// const reducer = (accumulator, currentValue) => accumulator + currentValue
const reducer = (accumulator, currentValue) => accumulator + currentValue;

const maximumWealth = function(accounts) {
    
    let arr =[];
    for(let i = 0; i<accounts.length; i++){
        arr.push(accounts[i].reduce(reducer));
        console.log(arr)
    }
    return Math.max(...arr);    
};


//Q3
let countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
    if(ruleKey == "type"){
        for(let i= 0; i < items.length; i++){
            if(items[i][0] == ruleValue){
                count = count + 1                
            }     
        }
    }else if(ruleKey == "color"){
        for(let i =0; i< items.length; i++){
            if(items[i][1] == ruleValue){
                count = count + 1                
            }
        }
    }else if(ruleKey == "name"){
        for(let i =0; i< items.length; i++){
            if(items[i][2] == ruleValue){
                count = count + 1                
            }
        }
    }return count;     
}

//Q4 

let smallerNumbersThanCurrent = function(nums) {    
    let arr = [];
    for(let i = 0; i<nums.length; i++){
        let sum = 0;
        for(let j = 0; j<nums.length; j++){
            if(nums[i] > nums[j]){
                sum = sum +1;
            }
        }arr.push(sum);
    }
   return arr
}

//Q5 
let countSmaller = function(nums) {
    let arr = [];
    for(let i = 0; i<nums.length; i++){
        let sum = 0;
        for(let j = i+1; j<nums.length; j++){
            if(nums[i] > nums[j]){
                sum = sum +1;
            }
        }arr.push(sum);
    }
   return arr
}

//Q6 
let numberOfSteps  = function(num) {
    let count = 0;
    do{
if(num == 0){
   return count
// step1. divide by 2 if the input num is even
}else if(num%2 == 0){
    num = num/2
    count ++
// step2. subtract 1 if the input num is odd       
}else {
    num = num-1
    count++
}
// step3. keep going with step1 and step2 until the num gets to 0
}while(num> 0)
// step4. count how many process has been through
return count;
}


