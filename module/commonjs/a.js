// module.exports = {
//   a: () => {
//     console.log("a");
//     console.log("this", this.b);
//   },
//   b: "b",
// };
exports.a = () => {
  console.log("this", this.b);
};
exports.b = "我是文件b";
