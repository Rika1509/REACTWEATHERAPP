export default function Searchbar({ handleCityChange, handleSubmit, getCurrentLocation }) {
  return (
    <div className="Searchbar">
      <div className="input-group mb-5">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            id="city-input"
            placeholder="Search for location"
            style={{ maxwidth: 230 }}
            onChange={handleCityChange}
          />
          <button className="btn btn-outline-primary" type="submit">
            Search
          </button>
          <button
            className="btn btn-outline-info"
            id="current-location"
            type="button"
            onClick={getCurrentLocation}
          >
            Current Location
          </button>
        </form>
      </div>
    </div>
  );
}
