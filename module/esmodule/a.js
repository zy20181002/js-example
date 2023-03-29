export default {
  a: () => {
    console.log("es module a");
  },
  b: "112323",
};

export const a = () => {
  console.log("es module a this", this);
};
