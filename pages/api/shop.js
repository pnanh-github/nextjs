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
    name: "Bút Cảm Ứng WiWU Picasso Active Stylus P339 Universal",
    price: 700,
    vnd: 700000,
    image: "https://salt.tikicdn.com/cache/400x400/ts/product/e2/b8/2d/e98fdcd3b293353f6f1f095986e66d2d.jpg",
  },
  {
    id: "4",
    name: "True Wireless Edifier X3s",
    price: 58,
    vnd: 609000,
    image: "http://shop.loa.com.vn/media/catalog/product/cache/1/thumbnail/1000x750/0dc2d03fe217f8c83829496872af24a0/x/3/x3s-3.jpg",
  },
];
export default (req, res) => {
  res.statusCode = 200;
  res.json(posts);
};
