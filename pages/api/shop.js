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
];
export default (req, res) => {
  res.statusCode = 200;
  res.json(posts);
};
