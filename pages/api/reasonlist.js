const posts = [
  {
    id: "1",
    name: "Thưởng điểm 10",
    price: 10,
  },
  {
    id: "2",
    name: "Thưởng làm việc nhà",
    price: 10,
  },
  {
    id: "3",
    name: "Thưởng khác",
    price: 8,
  },
];
export default (req, res) => {
  res.statusCode = 200;
  res.json(posts);
};
