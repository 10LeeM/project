
import React from "react";
import "./search.css";



const Search = () => {
 

  return (
    
      <div className="row-2">
          <h2>All Products</h2>
          <div className="searchh">
          
          <i className="fa fa-search"></i><input type="text" placeholder="search" required className="name" />
          </div>
        
<select>
    <option>Default</option>
    <option>Medicine</option>
    <option>Nutrition</option>
    <option>Products</option>
</select>
      </div>
 
   
  );
};

export default Search;