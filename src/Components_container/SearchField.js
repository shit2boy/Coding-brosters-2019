import React from'react';


let SearchField = ()=>{
let style = {
    marginRight :"25px",
    borderRadius :"5px"
 }
return(
    <div>
        <form  className="di">
            <select style= {style} value="City">
                <option value="Abuja">Abuja</option>
                <option value="Ibadan">Ibadan</option>
                <option value="Lagos">Lagos</option>
                <option value="Port Hacourt">Port Hacourt</option>
            </select>
            <select style= {style}>
                <option value="Area">Badagry</option>
                <option value="Ibeju Lekki">Ibeju Lekki</option>
                <option value="Ikeja">Ikeja</option>
                <option value="Ikoyi">Ikoyi</option>
                <option value="Lagos Island">Lagos Island</option>
                <option value="Victorial Islans">Victorial Island</option>
            </select>
            <select style= {style}>
                <option value="Arcade">Arcade</option>
                <option value="Archery">Archery</option>
                <option value="Arts and culture">Arts and culture</option>
                <option value="Bowlings">Bowlings</option>
                <option value="Casino">Casino</option>
                <option value="Clubs">Clubs</option>
                <option value="Horse Riding">Horse Riding</option>
                <option value="Kayakings">Kayakings</option>
                <option value="Kart Racing">Kart Racing</option>
                <option value="Museum">Museum</option>
                <option value="Parks">Parks</option>
                <option value="Spa and Wellness">Spa and Wellness</option>
                <option value="Restaurants">Restaurants/Eatries</option>
                <option value="Shopping">Shopping</option>
                <option value="Swimming">Swimming</option>
                <option value="Virtual Reality">Virtual Reality</option>
                <option value="Fiat">Zoo</option>
            </select>
            <input type = "search" name="searchField" id="searchField" value="" style= {style} placeholder="Search Here" />
        </form>
</div>
);

}
export default SearchField;