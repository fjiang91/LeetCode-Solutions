
//Use a hashMap to keep track of parent lookup
var FileSystem = function() {
  this.fileMap = {};
};

/**
* @param {string} path
* @param {number} value
* @return {boolean}
*/
//Split up the path into multiple parent dir
//Check each parent dir and see if exist
//If exist, then append the new path
//Else return false;
FileSystem.prototype.create = function(path, value) {
  const newPath = path.split('/');
  let validPath = true;
  let currDir = '';
  for (let i = 1; i < newPath.length - 1; i++){
      currDir += '/' + newPath[i];
      if(!this.fileMap[currDir]) return false;
  }

  if (validPath) {
      this.fileMap[path] = value;
  }

  return true;
};

/**
* @param {string} path
* @return {number}
*/
FileSystem.prototype.get = function(path) {
  return this.fileMap[path] || -1;
};

/**
* Your FileSystem object will be instantiated and called as such:
* var obj = new FileSystem()
* var param_1 = obj.create(path,value)
* var param_2 = obj.get(path)
*/
