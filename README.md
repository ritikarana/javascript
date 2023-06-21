# javascript

Javascript Advance Topics 

Debounce Function : A debounce is a higher-order function, which is a function that returns another function . This is done to form a closure around the func and wait function parameters and the timeout variable so that their values are preserved. The following is a definition of each variable:


function debounce(fn , wait){
    let timerId;
    return function(...args){
        if(timerId) clearTimeout(timerId);
        timerId = setTimeout(()=>{
           fn(...args)
        }, wait)
    }
}
