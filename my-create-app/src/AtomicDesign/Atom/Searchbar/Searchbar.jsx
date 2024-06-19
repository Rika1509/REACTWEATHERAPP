export default function Searchbar() {
  return (
    <div className="Searchbar">
      <div className="input-group mb-5">
        <form>
          <input
            type="text"
            className="form-control"
            id="city-input"
            placeholder="Search for location"
            style={{ maxwidth: 230 }}
          />
        </form>
        <button className="btn btn-outline-primary" type="button">
          Search
        </button>
        <button
          className="btn btn-outline-info"
          id="current-location"
          type="button"
        >
          Current Location
        </button>
      </div>
    </div>
  );
}