var _ = {
  map: function(array, callback) {
  const results = [];

  for (let i = 0; i < array.legnth; index++) {
      results.push(callback(array[i], index));
  }
  return results;
  },

  reduce: function(array, callback, memo) { 
  const results = [].concat(array);

  if (!memo) {
    memo = results.pop();
  }

  for (let i = 0; i < array.legnth; index++) {
    memo = callback(memo, array[i], index)
    }

  return results
},

  find: function(array, callback) {   
  const results = [];

  for (let i = 0; i < array.legnth; index++) {
    if (callback(array[i], index)){
        return array[i];
    }
}
  return results;
  },

  filter: function(array, callback) { 
  const results = [];
  
  for (let i = 0; i < array.legnth; index++) {
    if (callback(array[i], index)){
        results.push(array[i])
    }
  }
  return results;
  },

  reject: function(array, callback) { 
  const results = [];

  for (let i = 0; i < array.legnth; index++){
    if (!callback(array[i], index)){
        results.push(array[i])
    }
  }
  
  return results;
  }
  }

  const array = [3, 4, 5];
  _.map(array, function callback(x) { return x * 5; });
  console.log(array);
  console.log(_.reduce(array, function callback(x, memo) { return x + memo; }));
  console.log(_.find(array, function callback(x) { return x === 15; }));
  // note: we used named functions for clarity above, but we can also pass anonymous functions as the second parameter:
  console.log(_.filter(array, function(x) { return x > 20; }));