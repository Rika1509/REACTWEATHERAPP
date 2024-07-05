export default function FormattedDate(props) {

    if (!props.date) {
        return <div>No date provided</div>;
    }

    const { date } = props.data;
    
    let days = [    
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }

    let minutes = props.date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let currentDate = `${day} ${hours}:${minutes}`
    return (
        <div>
            {currentDate}
            Thursday 11.00
        </div>
    );
}