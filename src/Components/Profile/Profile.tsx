import "./Profile.css"

type props = {
    img: string
    name: string
    desc: string
}

export default function Profile({img, name, desc}: props){

    return(
        <div className="profileContainer">
            <img className="profilePic" src={img}/>
            <h2>{name}</h2>
            <p>{desc}</p>
        </div>
    )

}