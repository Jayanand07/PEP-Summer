console.log("Hello World");


const debounce = (fn, delay) => {
    let timer;
    return function(...args) {
        console.log(args);
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

const throttle = (fn, delay) => {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        if(now - lastCall >= delay){
            lastCall = now;
            fn(...args);
        }
    }
}

const ApiCall = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
};

const DebounceApiFn = debounce(ApiCall, 500);
const throttleApiFn = throttle(ApiCall, 1000);

inputField.addEventListener("input", () => {
    
    throttleApiFn(inputField.value);
});










