const express =  require ("express");

  const app = express();
  app.use(express.static("Build"));
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});

