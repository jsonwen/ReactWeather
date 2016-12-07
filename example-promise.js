// // http://api.openweathermap.org/data/2.5/weather?q=London&APPID=5552a63fb92337ac3d4e682abdecb5e2
//
// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Amsterdam', function(error, temp) {
//   if (error) {
//     console.log('error', error);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('City not found');
//     },1000);
//   });
// }
//
// getTempPromise('Amsterdam').then(function(temp){
//   console.log('Promise success', temp);
// }, function(error) {
//   console.log('Promise error', error);
// });

function addPromise(a, b) {
  return new Promise(function(resolve, reject){
    console.log(typeof a);
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('Invalid number');
    }
  });
}

addPromise(1,2).then(function(result){
  console.log(result);
}, function(error) {
  console.log(error);
})
