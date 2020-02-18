import React, {useContext, useEffect} from 'react';
import { AppContext } from './AppContext';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Nav = () => {

  // Handle mobile class for operating menu
  const {mobileNav} = useContext(AppContext);
  const [mobileNavs, setMobileNavs] = mobileNav;

  const onClickHandler = () => {
    setMobileNavs( mobileNavs === false ? true: false);
  }

  // Handles checking wheather the nav should change look based on window scroll position
  const {scroll} = useContext(AppContext);
  const [scrolls, setScrolls] = scroll;

  const scrolled = () => {
  if(window.scrollY >= 120){
      setScrolls( scrolls === false ? true: true);
    }else{
      setScrolls( scrolls === true ? false: false);
    }
  }
  
  useEffect(() => {
    if(window.scrollY >= 120) setScrolls( scrolls === false ? true: false);
   // elementInViewport();
  }, []);


  // Handle setting active class one navbar element
  const {navActive} = useContext(AppContext);
  let [active, setActive] = navActive;

  /*
  let elementInViewport = () => {
    
    //Home
    let myElement1 = document.querySelector("#home");
    let bounding1 = myElement1.getBoundingClientRect();

    //Expertise
    let myElement2 = document.querySelector("#expertise");
    let bounding2 = myElement2.getBoundingClientRect();

    //Portfolio
    let myElement3 = document.querySelector("#portfolio");
    let bounding3 = myElement3.getBoundingClientRect();

    //Contact
    let myElement4 = document.querySelector("#contact");
    let bounding4 = myElement4.getBoundingClientRect();

    if (bounding1.top >= 0 && bounding1.left >= 0 && bounding1.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding1.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
      
      if (active !== {'homeActive': true}) { setActive(active = {'homeActive': true})}
    //  console.log("home");
    } else if(bounding2.top >= 0 && bounding2.left >= 0 && bounding2.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding2.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
      if (active !== {'expertiseActive': true}) { setActive(active = {'expertiseActive': true}); }
     // console.log("expertise");
    } else if(bounding3.top >= 0 && bounding3.left >= 0 && bounding3.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding3.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
      if (active !== {'portfolioActive': true}) { setActive(active = {'portfolioActive': true}); }
     // console.log("portofolio");
    }else if(bounding4.top >= 0 && bounding4.left >= 0 && bounding4.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding4.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
      if (active !== {'contactActive': true}) { setActive(active = {'contactActive': true});}
     // console.log("contact");
    }
  }
  */

 const isElementXPercentInViewport = function(el, percentVisible) {
  let
    rect = el.getBoundingClientRect(),
    windowHeight = (window.innerHeight || document.documentElement.clientHeight);

  return !(
    Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-(rect.height / 1)) * 100)) < percentVisible ||
    Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
  )
};

  document.addEventListener("scroll", () => {
    if( isElementXPercentInViewport(document.querySelector("#home"), 100) === true){
      setActive(active = "home");
    }else if( isElementXPercentInViewport(document.querySelector("#expertise"), 100) === true){
      setActive(active = "expertise");
    }else if( isElementXPercentInViewport(document.querySelector("#portfolio"), 100) === true){
      setActive(active = "portfolio");
    }else if( isElementXPercentInViewport(document.querySelector("#contact"), 100) === true){
      setActive(active = "contact");
    }
  });
  


useEffect(() => {
  window.addEventListener("scroll", scrolled);
  window.addEventListener("scroll", () => {
    //elementInViewport();
  });
  
});

  return(
<nav className={ (mobileNavs === false ? '' : 'mobile-menu') + (scrolls === false ? '' : 'scrolled')} >
    <button className="icon js-focus-visible" id="myMenuFunction" onClick={onClickHandler}>
        <svg className="inline-svg" version="1.1" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 23.5 25">
            <title>Mobile Menu</title>
            <g className="svg-menu-toggle">
                <path className="bar" d="M20.945,8.75c0,0.69-0.5,1.25-1.117,1.25H3.141c-0.617,0-1.118-0.56-1.118-1.25l0,0c0-0.69,0.5-1.25,1.118-1.25h16.688C20.445,7.5,20.945,8.06,20.945,8.75L20.945,8.75z"></path>
                <path className="bar" d="M20.923,15c0,0.689-0.501,1.25-1.118,1.25H3.118C2.5,16.25,2,15.689,2,15l0,0c0-0.689,0.5-1.25,1.118-1.25 h16.687C20.422,13.75,20.923,14.311,20.923,15L20.923,15z"></path>
                <path className="bar" d="M20.969,21.25c0,0.689-0.5,1.25-1.117,1.25H3.164c-0.617,0-1.118-0.561-1.118-1.25l0,0 c0-0.689,0.5-1.25,1.118-1.25h16.688C20.469,20,20.969,20.561,20.969,21.25L20.969,21.25z"></path>
                <rect fill="none"></rect>
            </g>
        </svg>
    </button>
    <div>
      <AnchorLink href='#home' className={(active === "home") ? 'active' : ''}>HOME</AnchorLink>
      <AnchorLink href='#expertise' className={(active === "expertise") ? 'active' : ''}>EXPERTISE</AnchorLink>
      <AnchorLink href='#portfolio' className={(active === "portfolio") ? 'active' : ''}>PORTFOLIO</AnchorLink>
      <AnchorLink href='#contact' className={(active === "contact") ? 'active' : ''}>CONTACT</AnchorLink>
    </div>
</nav>
  )
}

export default Nav