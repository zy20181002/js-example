// 借用构造函数实现继承

// 父级
function Super(name, age) {
  this.name = name;
  this.age = age;
  this.likes = ["抽烟", "喝酒", "打牌"];
  this.sayName = function (childName = "sup") {
    console.log(`${childName}----- say`, this.name, this.age);
  };
}
Super.prototype.phone = "13333333333";

// 子级
function Sub() {
  Super.call(this, "章三", 30);
}
function Sub2() {
  Super.call(this, "里斯", 40);
}

const newChild = new Sub();
const newChild2 = new Sub2();
const newParent = new Super();
console.log("--------分割线--------");
// sub 更改继承的属性
console.log("更改前 sub1爱好", newChild.likes);
console.log("更改前 sub2的爱好", newChild2.likes);
console.log("更改前 sup的爱好", newParent.likes);
newChild.likes = ["嫖娼"];
console.log("--------分割线--------");
console.log("更改后 sub1爱好", newChild.likes);
console.log("更改后 sub2的爱好", newChild2.likes);
console.log("更改后 sup的爱好", newParent.likes);
console.log("--------分割线--------");
// prototype上的属性
console.log("sub1手机号", newChild.phone);
console.log("sup手机号", newParent.phone);
console.log("--------分割线--------");
// super的方法
newChild.sayName("sub1");
newChild2.sayName("sub2");
