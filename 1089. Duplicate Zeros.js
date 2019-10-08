var duplicateZeros = function(arr) {
  let tempStr = '';

  for (let i = 0; i < arr.length; i++){
      tempStr += arr[i] + ' ';
      if (arr[i] === 0){
          tempStr += '0 ';
      }
  }

  let tempArr = tempStr.split(' ').slice(0, arr.length);

  for (let i = 0; i < arr.length; i++){
      arr[i] = parseInt(tempArr[i]);
  }
};

module.exports = duplicateZeros;
