

function debounce(fn , wait){
    let timerId;
    return function(...args){
        if(timerId) clearTimeout(timerId);
        timerId = setTimeout(()=>{
           fn(...args)
        }, wait)
    }
}
