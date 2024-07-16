export default function FeelsLike(props) {
    return (
        <>
        <span className="feels-like">Feels like: {Math.round(props.feelslike)} </span>
        </>
    )
}