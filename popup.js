const check1 = document.getElementById("check1");
const check2 = document.getElementById("check2");
const check3 = document.getElementById("check3");
const check4 = document.getElementById("check4");
const check5 = document.getElementById("check5");
const check6 = document.getElementById("check6");
const check7 = document.getElementById("check7");
const check8 = document.getElementById("check8");
const check9 = document.getElementById("check9");
const check10 = document.getElementById("check10");
const check11 = document.getElementById("check11");
const check12 = document.getElementById("check12");
const check13 = document.getElementById("check13");
const submit = document.getElementById("btn-submit");
const duration = document.getElementById("duration")

 let initialState = {
        duration: null,
        options: {
            appcache: false,
            cache: false,
            cacheStorage: false,
            cookies: false,
            downloads: false,
            fileSystems: false,
            formData: false,
            history: false,
            indexedDB: false,
            localStorage: false,
            passwords: false,
            serviceWorkers: false,
            webSQL:false,
        }
    }
submit.addEventListener("click",()=>{
    const mainDuration =  getDuration(duration.value);
   initialState.duration = mainDuration;
   initialState.options.appcache = check1.checked ? true : false
   initialState.options.cache = check2.checked ? true : false
   initialState.options.cacheStorage = check3.checked ? true : false
   initialState.options.cookies = check4.checked ? true : false
   initialState.options.downloads = check5.checked ? true : false
   initialState.options.fileSystems = check6.checked ? true : false
   initialState.options.formData = check7.checked ? true : false
   initialState.options.history = check8.checked ? true : false
   initialState.options.indexedDB = check9.checked ? true : false
   initialState.options.localStorage = check10.checked ? true : false
   initialState.options.passwords = check11.checked ? true : false
   initialState.options.serviceWorkers = check12.checked ? true : false
   initialState.options.webSQL = check13.checked ? true : false
    
    browsingData(initialState);
   
       
})


const getDuration = (props)=>{
    let milliseconds = 1000 * 60 * 60 * 24 * props;
    let duration = (new Date()).getTime() - milliseconds;
    return duration;
}

const browsingData = (props)=>{
    chrome.browsingData.remove({
        "since": props.duration
    }, props.options, cb);
}

const cb = ()=>{
   buttonActions();
}
const buttonActions = ()=>{
    submit.value = "Data Deleted!";
    submit.style.backgroundColor = "#e6e6e6"
    submit.style.pointerEvents = "none"
    submit.style.color = "#2b2d42"
}