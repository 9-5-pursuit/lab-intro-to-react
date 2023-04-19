//This is the child element of App.js
function NavBar() {
  return (
    <section class="header">
      <div>
        <button className="btns">What is pursuit?</button>
        <button className="btns">Create an account</button>
        <button className="btns">Sign in </button>
      </div>
    </section>
  );
}

export default NavBar;

{
  /* <div className="App">
  <section className="header">
    <NavBar />
  </section>
  <section className="body">
    <UserProfile />
    <Posts />
    <Contacts />
  </section>
</div>; */
}
