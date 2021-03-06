module.exports = (req, res) => {
  const templates = [
    {
      id: "epub3",
      name: "Simple",
    },
    {
      id: "modern",
      name: "Modern",
    },
    {
      id: "scifi",
      name: "Science Fiction",
    },
  ];
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(templates);
}