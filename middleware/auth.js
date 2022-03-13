export default ({ redirect }) => {
  const loggedIn = true;
  if (!loggedIn) {
    return redirect("/");
  }
  console.log("auth middle");
};
