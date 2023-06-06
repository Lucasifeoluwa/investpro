import "./navbar.scss";

function NavBar(): JSX.Element {
  return (
    <div className="navbar">
      <div className="first">investorpro</div>
      <div className="second">
        <div className="items">About us</div>
        <div className="items">Wage Advance</div>
        <div className="items">Bill Split</div>
        <div className="items">Blog</div>
        <div className="items">FAQ's</div>
      </div>
    </div>
  );
}

export default NavBar;
