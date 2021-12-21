import app from "./app";

app.listen(app.get("port"), () => {
  console.log(
    "\nApp is running at http://localhost:%d in %s mode\n * Press CTRL+C to stop\n",
    app.get("port"),
    app.get("env")
  );
});
