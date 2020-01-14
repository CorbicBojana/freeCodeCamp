// Basic Algorithm Scripting: Convert Celsius to Fahrenheit

function convertToF(celsius) {
    var fahrenheit = celsius * (9 / 5) + 32;
  
    if (typeof fahrenheit !== "undefined") {
      return fahrenheit;
    } else {
      return "fahrenheit not defined";
    }
  }
  
  convertToF(30);

  // Basic Algorithm Scripting: Reverse a String

  function reverseString(str) {
    return str
      .split("")
      .reverse()
      .join("");
  }
  
  reverseString("hello");

  // Basic Algorithm Scripting: Factorialize a Number

  function factorialize(num) {
    for (var product = 1; num > 0; num--) {
      product *= num;
    }
    return product;
  }
  
  factorialize(5);

  // Basic Algorithm Scripting: Find the Longest Word in a String

  function findLongestWordLength(str) {
    var words = str.split(' ');
    var maxLength = 0;
  
    for (var i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
  
    return maxLength;
  }

  // Basic Algorithm Scripting: Return Largest Numbers in Arrays

  function largestOfFour(arr) {
    var results = [];
    for (var n = 0; n < arr.length; n++) {
      var largestNumber = arr[n][0];
      for (var sb = 1; sb < arr[n].length; sb++) {
        if (arr[n][sb] > largestNumber) {
          largestNumber = arr[n][sb];
        }
      }
  
      results[n] = largestNumber;
    }
  
    return results;
  }

  // Basic Algorithm Scripting: Confirm the Ending

  function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
  
    return str.slice(str.length - target.length) === target;
  }
  
  confirmEnding("He has to give me a new name", "name");

  // Basic Algorithm Scripting: Repeat a String Repeat a String

  function repeatStringNumTimes(str, num) {
    var accumulatedStr = "";
  
    while (num > 0) {
      accumulatedStr += str;
      num--;
    }
  
    return accumulatedStr;
  }

  // Basic Algorithm Scripting: Truncate a String

  function truncateString(str, num) {

    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  // Basic Algorithm Scripting: Boo who

  function booWho(bool) {
    return typeof bool === "boolean";
  }
  
  booWho(1);

  // Basic Algorithm Scripting: Title Case a Sentence

  function titleCase(str) {
    var convertToArray = str.toLowerCase().split(" ");
    var result = convertToArray.map(function(val) {
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(" ");
  }
  
  titleCase("I'm a little tea pot");

  // Basic Algorithm Scripting: Slice and Splice

  function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
      localArray.splice(n, 0, arr1[i]);
      n++;
    }
    return localArray;
  }

  // Basic Algorithm Scripting: Falsy Bouncer

  function bouncer(arr) {
    let newArray = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) newArray.push(arr[i]);
    }
    return newArray;
  }

  // Basic Algorithm Scripting: Where do I Belong

  function getIndexToIns(arr, num) {
    arr.sort(function(a, b) {
      return a - b;
    });
  
    for (var a = 0; a < arr.length; a++) {
      if (arr[a] >= num) return a;
    }
  
    return arr.length;
  }

  // Basic Algorithm Scripting: Mutations

  function mutation(arr) {
    var test = arr[1].toLowerCase();
    var target = arr[0].toLowerCase();
    for (var i = 0; i < test.length; i++) {
      if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
  }

  // Basic Algorithm Scripting: Chunky Monkey
