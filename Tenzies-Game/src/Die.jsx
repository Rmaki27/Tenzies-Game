export default function Die(props) {

    return (
        <>
            <div className="Die" onClick={props.holdDice}>
                <h2 className="Die--value">{props.value}</h2>
            </div>
        </>
    )
}