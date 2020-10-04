const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages)

ages.sort()
const age_min = ages[0]
const age_max = ages[ages.length-1]
const age_median = median(ages)
const age_avg = ages.reduce((agg, curr) => agg + curr) / ages.length
const age_range = age_max - age_min
const age_min_avg = Math.abs(age_min - age_avg)
const age_max_avg = Math.abs(age_max - age_avg)

console.log(`Min age ${age_min}, Max age ${age_max}, Median age ${age_median}, Avg age ${age_avg}, Age range ${age_range} Min - avg: ${age_min_avg}, Max - avg: ${age_max_avg}`)




function median(values){
    if(values.length ===0) return 0;
    
    values.sort(function(a,b){
        return a-b;
    });
    
    var half = Math.floor(values.length / 2);
    
    if (values.length % 2)
        return values[half];
    
    return (values[half - 1] + values[half]) / 2.0;
    }