export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    
    return (
        <>
            <div className="Die" 
            style={styles}
            onClick={props.holdDice}>
                <h2 className="Die--value">{props.value}</h2>
            </div>
        </>
    )
}