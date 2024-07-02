export default function weatherInfo(props) {

  const { description } = props.data;

  return (
    <div className="col-md-3" id="current-weather-info">
      <div className="card-body">
        <h5 className="card-title" id="weather-description">
          {(description)}
        </h5>
      </div>
    </div>
  );
}
