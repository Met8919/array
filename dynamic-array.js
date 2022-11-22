class DynamicArray {
  constructor(defaultSize = 4) {
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(defaultSize);
  }

  read(index) {
    return this.data[index];
  }

  push(val) {
    if (this.length < this.capacity) {
      this.data[this.length] = val;
      this.length++;
    }
  }

  pop() {
    if (this.length <= 0) return undefined;

    let x = this.data[this.length - 1];
    this.data[this.length - 1] = undefined;
    this.length--;
    return x;
  }

  shift() {
    //remove the first element
    if (this.length <= 0) return undefined;
    let val = this.data[0];

    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.data[this.length - 1] = undefined;
    this.length--;
    return val;
  }

  unshift(val) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.data[0] = val;
    this.length++;
    return this.length;
  }

  indexOf(val) {
    for (let i = 0; i < this.length; i++) {
      let current = this.data[i];
      if (current === val) {
        return i;
      }
    }

    return -1;
  }

  resize() {
    // Your code here
  }
}

// let dynamicArr = new DynamicArray();
// dynamicArr.push(1);
// dynamicArr.push(2);
// dynamicArr.push(3);

// console.log(dynamicArr.pop());
// console.log(dynamicArr.data, dynamicArr.data.length);

module.exports = DynamicArray;
