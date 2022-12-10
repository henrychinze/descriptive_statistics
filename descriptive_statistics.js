
//Mean
const mean = arr => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total / arr.length;

  };

  //Median
  const median = arr => {
    const { length } = arr;
    
    arr.sort((a, b) => a - b);
    
    if (length % 2 === 0) {
      return (arr[length / 2 - 1] + arr[length / 2]) / 2;
    }
    
    return arr[(length - 1) / 2];
  };

  //Mode
  const mode = arr => {
    const mode = {};
    let max = 0, count = 0;
  
    for(let i = 0; i < arr.length; i++) {
      const item = arr[i];
      
      if(mode[item]) {
        mode[item]++;
      } else {
        mode[item] = 1;
      }
      
      if(count < mode[item]) {
        max = item;
        count = mode[item];
      }
    }
     
    return max;
  };

  //Range
  const range = arr => {
    arr.sort((a, b) => a - b);
    
    return [arr[0], arr[arr.length - 1]];
  };

//standard deviation
  function dev(arr){
    // Creating the mean with Array.reduce
    let mean = arr.reduce((acc, curr)=>{
      return acc + curr
    }, 0) / arr.length;
     
    // Assigning (value - mean) ^ 2 to every array item
    arr = arr.map((k)=>{
      return (k - mean) ** 2
    })
     
    // Calculating the sum of updated array
   let sum = arr.reduce((acc, curr)=> acc + curr, 0);
    
   // Calculating the variance
   let variance = sum / arr.length
    
   // Returning the standard deviation
   return Math.sqrt(sum / arr.length)
  }

//Quartile deviation
  function Median(data) {
    return Quartile_50(data);
  }
  
  function Quartile_25(data) {
    return Quartile(data, 0.25);
  }
  
  function Quartile_50(data) {
    return Quartile(data, 0.5);
  }
  
  function Quartile_75(data) {
    return Quartile(data, 0.75);
  }
  
  function Quartile(data, q) {
    data=Array_Sort_Numbers(data);
    var pos = ((data.length) - 1) * q;
    var base = Math.floor(pos);
    var rest = pos - base;
    if( (data[base+1]!==undefined) ) {
      return data[base] + rest * (data[base+1] - data[base]);
    } else {
      return data[base];
    }
  }
  
  function Array_Sort_Numbers(inputarray){
    return inputarray.sort(function(a, b) {
      return a - b;
    });
  }
  
  function Array_Sum(t){
     return t.reduce(function(a, b) { return a + b; }, 0); 
  }
  
  function Array_Average(data) {
    return Array_Sum(data) / data.length;
  }
  
  function Array_Stdev(tab){
     var i,j,total = 0, mean = 0, diffSqredArr = [];
     for(i=0;i<tab.length;i+=1){
         total+=tab[i];
     }
     mean = total/tab.length;
     for(j=0;j<tab.length;j+=1){
         diffSqredArr.push(Math.pow((tab[j]-mean),2));
     }
     return (Math.sqrt(diffSqredArr.reduce(function(firstEl, nextEl){
              return firstEl + nextEl;
            })/tab.length));  
  }

//Variance
  const findVariance = (arr = []) => {
    if(!arr.length){
       return 0;
    };
    const sum = arr.reduce((acc, val) => acc + val);
    const { length: num } = arr;
    const median = sum / num;
    let variance = 0;
    arr.forEach(num => {
       variance += ((num - median) * (num - median));
    });
    variance /= num;
    return variance;
 };

//Adsolute Deviation
 const arr1 = [1,2,3,4,5,6];
const arr2 = [9,8,7,5,8,3];
const absDifference = (arr1, arr2) => {
   const res = [];
   for(let i = 0; i < arr1.length; i++){
      const el = Math.abs((arr1[i] || 0) - (arr2[i] || 0));
      res[i] = el;
   };
   return res;
};
console.log(absDifference(arr1, arr2));