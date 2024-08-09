import "./Article.css"

type props = {
    header: string
    text: string
    img: string
}

export default function Article({header, text, img}: props) {

    return(
        <div className="articleContainer">
            <h1>{header}</h1>
            <p>{text}</p>
            <img className="articleImg" src={img} />
        </div>
    )
}
