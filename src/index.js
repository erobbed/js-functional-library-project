fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },
    each: function each(list, iteratee){
      for(var i in list){
        iteratee(list[i])
      }
      return list
    },
    map: function map(list, iteratee){
      let newArr = []
      for(var i in list){
        newArr.push(iteratee(list[i], i, list))
      }
      return newArr
    },
    reduce: function reduce(list, iteratee, memo){
      let accumulator = memo

      for(var i in list){
        let memo = accumulator
        accumulator = iteratee(memo, list[i], i, list)
      }
      return accumulator
    },
    find: function find(list, predicate){
      for(var i in list){
        if (predicate(list[i])){
          return list[i]
        }
      }
    },
    filter: function filter(list, predicate){
      let newArr = []
      for(var i in list){
        if (predicate(list[i])){
           newArr.push(list[i])
        }
      }
      return newArr
    },
    sortBy: function sortBy(list, iteratee){
      let newArr = []
      for(var i in list){
        newArr.push(list[i])
        newArr.sort(iteratee)
        //if typeof iteratee === 'string'
        //newArr.sort(list[i][iteratee])
      }
      // function sortingFn(l,r) {if (l>r) {return 1} else {return 0}}
      // return list.sort(iteratee)
      return newArr
      //did not get this
    },
    size: function size(list){
      let count = 0
      for(var i in list){
        count += 1
      }
      return count
    },
    first: function first(array, n){
      if (n){
        return array.slice(0, n)
      }
      else {
        return array[0]
      }
    },
    last: function last(array, n){
      if (n){
        return array.slice(array.length-n, array.length)
      }
      else {
        return array[array.length -1]
      }
    },
    compact: function compact(list){
      let newArr = []
      for(var i in list){
        if (list[i]){
          newArr.push(list[i])
        }
      }
      return newArr
    },
    uniq: function uniq(list){
      let newArr = []
      for(var i in list){
        if (newArr.includes(list[i]) === false){
          newArr.push(list[i])
        }
      }
      return newArr
    },
    keys: function keys(object){
      let newArr = []
      for(var i in object){
        newArr.push(i)
      }
      return newArr
    },
    values: function values(object){
      let newArr = []
      for(var i in object){
        newArr.push(object[i])
      }
      return newArr
    },
    functions: function functions(fi){
      let newArr = []
      for(var i in fi){
        newArr.push(i)
      }
      return newArr
    },
    flatten: function flatten(array, shallow){
      let newArr = []
      for(var i in array){
        if (shallow === true){
          if(Array.isArray(array[i])) {
              newArr = newArr.concat(array[i]);
          } else {
              newArr.push(array[i]);
          }
        }
        else {
          if(Array.isArray(array[i])) {
              newArr = newArr.concat(flatten(array[i]));
          } else {
              newArr.push(array[i]);
          }
        }
      }
      return newArr
    },
    bind: function bind(fn, object, ...args){
      return function(){
        return fn.apply(object, args)
      }
      //did not get this
    }
  }
})()

fi.libraryMethod()
