setTimeout(() => {
    console.log('timeout');
    clearInterval(int)
},3000);

const int = setInterval(() => {
    console.log('time interval');
},1000)