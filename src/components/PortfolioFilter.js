import React,{useContext} from 'react';
import { AppContext } from '../utils/AppContext';
import {portfolioData} from '../json/portfolioData.js';



const PortfolioFilter = () => {
  // eslint-disable-next-line
  const { portfolioFilterState,portShow1,portShow2,portShow3,portShow4,portShow5,portShow6,portShow7, portShow8,portShow9, portShow10, portShow11} = useContext(AppContext);
  // eslint-disable-next-line
  let [show1, setShow1] = portShow1;
  // eslint-disable-next-line
  let [show2, setShow2] = portShow2;
  // eslint-disable-next-line
  let [show3, setShow3] = portShow3;
  // eslint-disable-next-line
  let [show4, setShow4] = portShow4;
  // eslint-disable-next-line
  let [show5, setShow5] = portShow5;
  // eslint-disable-next-line
  let [show6, setShow6] = portShow6;
  // eslint-disable-next-line
  let [show7, setShow7] = portShow7;
  // eslint-disable-next-line
  let [show8, setShow8] = portShow8;
  // eslint-disable-next-line
  let [show9, setShow9] = portShow9;
  // eslint-disable-next-line
  // let [show10, setShow10] = portShow10;
  // // eslint-disable-next-line
  // let [show11, setShow11] = portShow11;
  
  // eslint-disable-next-line
  let [portfolioFilter, setPortfolioFilter] = portfolioFilterState; 

  return (
    <div id="portfolio-filter">
      <div>
        <label htmlFor="portfolio-filter-select">FILTER BY:</label>

        <select id="portfolio-filter-select" name="portfolio-filter-select" 
        onChange={(e) => {
          let filterInput = e.target.value.toUpperCase();

          setPortfolioFilter( portfolioFilter = filterInput);

          setShow1(show1 = false);
          setShow2(show2 = false);
          setShow3(show3 = false);
          setShow4(show4 = false);
          setShow5(show5 = false);
          setShow6(show6 = false);
          setShow7(show7 = false);
          setShow8(show8 = false);
          setShow9(show9 = false);
          // setShow10(show10 = false);
          // setShow11(show11 = false);

          setTimeout(function(){

          if( portfolioData[0].tags.includes(filterInput) !== false || filterInput === "ALL" ) {
            setShow1(show1 = true)
          }else{
            setShow1(show1 = false)
          }

          if( portfolioData[1].tags.includes(filterInput) !== false || filterInput === "ALL" ) {
            setShow2(show2 = true)
          }else{
            setShow2(show2 = false)
          }

          if( portfolioData[2].tags.includes(filterInput) !== false || filterInput === "ALL" ) {
            setShow3(show3 = true)
          }else{
            setShow3(show3 = false)
          }

          if( portfolioData[3].tags.includes(filterInput) !== false || filterInput === "ALL" ) {
            setShow4(show4 = true)
          }else{
            setShow4(show4 = false)
          }

          if( portfolioData[4].tags.includes(filterInput) !== false || filterInput === "ALL" ) {
            setShow5(show5 = true)
          }else{
            setShow5(show5 = false)
          }

          if( portfolioData[5].tags.includes(filterInput) !== false || filterInput === "ALL" ) {
            setShow6(show6 = true)
          }else{
            setShow6(show6 = false)
          }

          if( portfolioData[6].tags.includes(filterInput) !== false || filterInput === "ALL" ) {
            setShow7(show7 = true)
          }else{
            setShow7(show7 = false)
          }

          if( portfolioData[7].tags.includes(filterInput) !== false || filterInput === "ALL" ) {
            setShow8(show8 = true)
          }else{
            setShow8(show8 = false)
          }

          if( portfolioData[8].tags.includes(filterInput) !== false || filterInput === "ALL" ) {
            setShow9(show9 = true)
          }else{
            setShow9(show9 = false)
          }

          // if( portfolioData[9].tags.includes(filterInput) !== false || filterInput === "ALL" ) {
          //   setShow10(show10 = true)
          // }else{
          //   setShow10(show10 = false)
          // }

          // if( portfolioData[10].tags.includes(filterInput) !== false || filterInput === "ALL" ) {
          //   setShow11(show11 = true)
          // }else{
          //   setShow11(show11 = false)
          // }
        }, 400);
        }} >
          <option value="all">All</option>
          <option value="front end">Front End</option>
          <option value="back end">Back End</option>
          <option value="full stack">Full Stack</option>
          <option value="react">React</option>
          <option value="node">Node</option>
          <option value="mongodb">Mongodb</option>
          <option value="mysql">Mysql</option>
          <option value="firebase">Firebase</option>
          <option value="redux">Redux</option>
        </select>
      </div>
    </div>
  )
}

export default PortfolioFilter;




