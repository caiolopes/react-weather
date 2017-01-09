// function getTempCallback(location, callback) {
//   callback(undefined, 20);
//   callback("City not found");
// }

// getTempCallback("Salvador,BA", function(err, temp){
//   if(err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });

// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(20);
//       reject('City not found');
//     }, 3000);
//   });
// }

// getTempPromise("Salvador,BA").then(function(temp) {
//   console.log("Promise success", temp);
// }, function(err) {
//   console.log("Promise error", err);
// });

// Challenge Area
function addNumbers(a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a == 'number' && typeof b == 'number') {
      resolve(a + b);
    } else {
      reject('Error on arguments.');
    }
  });
}

addNumbers('abc', 3).then(function(result) {
  console.log('success', result);
}, function(err) {
  console.log('error', err);
});