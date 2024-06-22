export default (req, res) => {
  res.render("dashboard", {
    user: req.session.user.name,
    posts: [
      {
        id: 1,
        author: "Mercy",
        title: "I love Express",
        content: "Express is a wonderful framework for building Node.js apps",
      },
      {
        id: 2,
        author: "Malady",
        title: "Have you tried Pug?",
        content: "I recently tried the Pug templating language and its excellent",
      },
    ],
  }); 
};
