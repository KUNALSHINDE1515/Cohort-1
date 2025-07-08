import contriesdata from '../contriesdata';
import ContryCard from './ContryCard.jsx';

function ContriesList() {
    
    const array  = contriesdata.map((country) => {

        if (country.region === "Asia") {
            console.log(country.name);
        }
        return <ContryCard 
        name={country.name}  
        flags={country.flags.svg}
        population={country.population}
        region={country.region}
        capital={country.capital}
        />
    })
    
    return (
    <div class="conntries-container">
        {
            array
        }
     </div>
    )
}

export default ContriesList;
