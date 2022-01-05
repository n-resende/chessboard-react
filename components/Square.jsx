export default function Square(props) {
    return(
        <div style={ { 
            width: 60,
            height: 60,
            backgroundColor: props.num % 2 == 0 ? "black" : "white",
         } }>

        </div>
    )
}