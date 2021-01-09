import 'bootstrap/dist/css/bootstrap.min.css';
import './blog.css';
import logo from'./image/logo2.png';
import logo1 from'./image/Plan de travail 1.png';
import logo2 from'./image/unnamed (1).png';
import Carousel from 'react-bootstrap/Carousel';
function App() {
  return (
<div className="med">

<main>
<header >

<Carousel align="center">
  <Carousel.Item  >
    <img
      className="d-block"
      src={logo2}
      height="480px" 
      width= "1300px"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3><kbd>Clever word games (3 games in 1)</kbd></h3>
      <p><kbd>Play free Brain Teasers games and keep your mind sharp.</kbd></p>
    </Carousel.Caption> </Carousel.Item>
  <Carousel.Item  >
    <img
      className="d-block" 
      src={logo1}
      height="480px" 
      width= "1300px"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3><kbd>أربع (4) صور كلمة واحدة - arabic 4 pics 1 word</kbd></h3>
      <p><kbd>Play free Brain Teasers games and keep your mind sharp.</kbd></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block" 
      src={logo}
      height="480px" 
      width= "1300px"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3><kbd>Crossword Slide Puzzle (4 words 1 pic) 2020</kbd></h3>
      <p><kbd>Play free Brain Teasers games and keep your mind sharp.</kbd></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</header>
<nav className="navbar navbar-expand-sm fixed-top navbar-light">
    <div className="container">
        
        <h1 className="text-white">A2Z</h1>
        
    </div>
</nav>
<div className="sticky-top hidden-spacer"> </div>
  <nav className="container">

</nav>

    <div className="row">
      <div className="col-lg-4">

        <img src={logo} alt="logo" className="bd-placeholder-img rounded-circle" width="140" height="140"/>

        <h2 className="mt-5">Crossword Slide Puzzle (4 words 1 pic) 2020</h2>

        <p className="mt-5">You have to find the words from the images given.

Connect letters in any direction to form the hidden words!<br/>
Search and find all the words hidden in the puzzle <br/>
The player who first finds all the hidden words wins the game.
</p>
        <p><a className="btn btn-primary mt-2" href="https://play.google.com/store/apps/details?id=com.A2Z.CrossWord" role="button">Download Links &raquo;</a></p>
      </div>
      <div className="col-lg-4 ">
      <img src={logo2}  className="bd-placeholder-img rounded-circle" alt="logo1" width="140" height="140"/>

        <h2 className="mt-5">Clever word games (3 games in 1)</h2>

        <p className="mt-5">This word connect game has 500+ levels!<br/> It is a real challenge to complete all the levels in this game.<br/>
         If you like word search, word find puzzles and crossword puzzles you will like our latest brain workout, word puzzle!</p>
        <p><a className="btn btn-primary mt-2" href="https://play.google.com/store/apps/details?id=com.A2Z.Words3in1" role="button">Download Links &raquo;</a></p>
      </div>
      <div className="col-lg-4 " >
         <img src={logo1}  className="bd-placeholder-img rounded-circle" alt="logo2" width="140" height="140"/>

        <h2 className="mt-5">أربع (4) صور كلمة واحدة - arabic 4 pics 1 word</h2>

        <p className="mt-5">Educational and entertaining word game,
Enjoy Single Player mode, or addictive Multiplayer mode .</p>
        <p className="mt-5"><a className="btn btn-primary " href="https://play.google.com/store/apps/details?id=com.A2Z.OneWord" role="button">Download Links &raquo;</a></p>
      </div>
    </div>

    <hr className="featurette-divider"></hr>



</main>
<footer>
    <p className="  text-center text-white mt-2"> &copy; A2Z Company <br/> msehlimohamed96@gmail.com  </p>
  </footer>
</div>
    
  );
}
export default App;
