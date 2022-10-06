
import pngwing from "../assets/img/pngwing.png"

const NavBar = () =>{
    return(
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src={pngwing} height="40" />
      PREDICCIÓN METEOROLÓGICA 
    </a>
  </div>
</nav>
    );
}

export default NavBar;