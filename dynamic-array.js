class DynamicArray {

  constructor(defaultSize = 4) {
    this.capacity = defaultSize
    this.length = 0
    this.data = new Array(defaultSize)

  }

  read(index) {
    return this.data[index]
  }

  push(val) {
  
    if(this.length < this.capacity){
      this.data[this.length] = val
      this.length ++;
      }
  }


  pop() {

    // Your code here
  }

  shift() {

    // Your code here
  }

  unshift(val) {

    // Your code here
  }

  indexOf(val) {

    // Your code here
  }

  resize() {

    // Your code here
  }

}

dynamicArr = new DynamicArray();
dynamicArr.push(1);
console.log(dynamicArr.data)




module.exports = DynamicArray;
