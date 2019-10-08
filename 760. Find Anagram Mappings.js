var anagramMappings = function(A, B) {
  let bMap = {};
  for (let i = 0; i < B.length; i++){
      bMap[B[i]] = i;
  };

  return A.map( num => bMap[num]);
};

module.exports = anagramMappings;
