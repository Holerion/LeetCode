var twoSum = function(nums, target) {
    rez=[];
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
           if((nums[i]+nums[j]==target)&&(i !=j)){
                   rez.push(i) 
                   rez.push(j)
               return (rez)
           } 
        }
    }    
};