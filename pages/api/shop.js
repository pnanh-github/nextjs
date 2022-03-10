const posts = [
  {
    id: "1",
    name: "SỔ SỨ MỆNH",
    price: 100,
    vnd: 100000,
    image: "https://lienquan.garena.vn/files/upload/images/VP%203%281%29%281%29%281%29%281%29%281%29%281%29%281%29%281%29.jpg",
  },
  {
    id: "2",
    name: "iPhone X",
    price: 10000,
    vnd: 10000000,
    image: "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg",
  },
  {
    id: "3",
    name: "Apple Pencil",
    price: 10000,
    vnd: 2600000,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcThvr4RnRBirJyhuu5IFUDVItmMfSYB3dpCNAm5k52vjY7nuUYP3IKiuXsC--sQZn6TzmFzeB3lOw&usqp=CAc",
  },
];
export default (req, res) => {
  res.statusCode = 200;
  res.json(posts);
};
