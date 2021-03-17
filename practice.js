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