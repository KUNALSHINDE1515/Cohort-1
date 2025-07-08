function ContryCard({name, flags, population, region, capital}) {
    // console.log(name);
    
    return (
        <a className="country-card" href="./country.html?name=Georgia">
  <img src={flags} alt="flag" />
  <div className="card-text">
    <h3 className="card-title">{name}</h3>
    <p>
      <b>Population : </b>{population.toLocaleString('en-In')}
    </p>
    <p>
      <b>Region : </b>{region}
    </p>
    <p>
      <b>Capital : </b>{capital}
    </p>
  </div>
</a>

    )
}

export default ContryCard
