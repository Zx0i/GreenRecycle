import "./SearchFilter.css"
import JSONDATA from "./Electronics_Drop_Off_Locations_in_NYC.json";
import { useState } from 'react'



function SearchFilter() {
    const [searchTerm, setSearchTerm] = useState('')
    return (<div className="SearchFilter">
        <input type="text" placeholder="ZipCode" onChange={event => { setSearchTerm(event.target.value) }} />
        {JSONDATA.filter((val) => {
            if (searchTerm === "") {
                return

            } else if (val.Zipcode.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            }


        }).map((val, key) => {
            return (

                <div className="zipcode" key={key}>

                    <p><h4><a href={val.google}>Location</a></h4> {val.Address}, {val.Zipcode} [{val.DropOff_SiteName}] </p>
                </div>

            );
        })}
    </div>
    );
}

export default SearchFilter;