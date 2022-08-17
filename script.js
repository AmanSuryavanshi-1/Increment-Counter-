const counters = document.querySelectorAll('.counter');

counters.forEach((counter)=>{


counter.innerHTML = 0;
const updateCounter= () => {
    const targetCount = +counter.getAttribute('data-target'); //gets the data from html file
    const startingCount = Number(counter.innerHTML);
    // console.log(typeof targetCount);  O/P-String
    
// There are several ways to convert string data into numbers:

// 1)
// Using the unary plus operator:
// var n= +str;

// 2)
// The Number constructor:
// var n Number(str);

// 3)
// The parseFloat function: // var n= parseFloat(str);
// var n = parseFloat(str);
 
    const incr = targetCount / 100;
    if(startingCount < targetCount ){
        counter.innerHTML = `${Math.round(startingCount + incr)}`;
        setTimeout(updateCounter,10)
    }else{
        counter.innerHTML = targetCount;
    }
}

updateCounter();

})


