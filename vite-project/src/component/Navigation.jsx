const Navigation=()=>
{
 return (
  <nav className="container">
        <div className="logo">
          <img src="/images/nikelogo.jpg" alt="logo" width="80" height="80" />
        </div>
        <ul>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Location</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button>login</button>
      </nav>
 );
}
export default Navigation;