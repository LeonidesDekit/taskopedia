import logo from '../images/react.png';

function MainHeader(){
    return(
      <div className='pt-2 py-1 pl-2' style={{backgroundColor:"orange"}}>
        <img src={logo} style={{height:"35px", verticalAlign:"top"}}/>
        <span className='h2 pt-4 text-50'>React Course - Taskopedia</span>
      </div>
    )
  }
  const subHeaderStyle = {
    color: "yellow",
    backgroundColor: "grey",
    
  }
  function SubHeader(){
    return <p style={subHeaderStyle} className='text-center'>This will be exiciting course.</p>;
  }
const Header = () => {
    return(
      <div>
        <MainHeader/>
        <SubHeader/>
      </div>
    )
  }

  export default Header;