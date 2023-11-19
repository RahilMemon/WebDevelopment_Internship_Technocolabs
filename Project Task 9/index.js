let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
var runnerAge = 25;

if (runnerAge>18 && registeredEarly) {
  raceNumber+=1000;
}

if (runnerAge>18 && registeredEarly == true) {
  console.log(`Runner:${raceNumber}: Your race starts at 9:30`);
}else if(runnerAge>18 && registeredEarly == false){
    console.log(`Runner:${raceNumber}: Late adults Your race start run at 11:00`);
}else if(runnerAge<18){
    console.log(`Runner:${raceNumber}: Race at 12:30pm`)
}else if(runnerAge===18){
    console.log(`Runner:${raceNumber}: Exactly 18 Race at 12:00 pm `)
}else{
    console.log(`Runner see the Registration desk`)
}