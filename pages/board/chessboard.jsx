import Square from "../../components/Square";

export default function chessboard() {
    var list = [];
    list.length = 64;
    for (let index = 0; index < list.length; index++) {
        if ( Math.floor(index/8) % 2 == 0) {
            list[index] = index+1;
        }else{
            list[index] = index;
        }
        
    }
    
    return(
            <div className="bg">
            {list.map(function(n,i) {
                return <Square num = {n}/>
            })}
            </div>
    )
}