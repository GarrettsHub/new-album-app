

const Card =(props)=> {

    return(
        <div className="col">
            <div className="card">
                <img src={`/images/${props.imgUrl}`} alt={props.name} className="img-fluid image card-img-top my-img"/>
                <div className="card-body">
                    <h3 className="card-title">{props.name}</h3>
                </div>
            </div>
        </div>
    )
}

export default Card