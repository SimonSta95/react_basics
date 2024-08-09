import "./App.css"
import Header from "./Components/Header/Header.tsx";
import Profile from "./Components/Profile/Profile.tsx";
import Article from "./Components/Article/Article.tsx";

export default function App(){

    const data =
        [
            {
                header: "Artikel 1",
                text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
                img: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
                header: "Artikel 2",
                text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGz-97K2FomInEecE-Gb0CZAIcdDdMTYg9kA&s"
            },
            {
                header: "Artikel 3",
                text:"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
                img: "https://png.pngtree.com/png-vector/20240207/ourlarge/pngtree-happy-smile-cat-images-png-image_11673005.png"
            },
        ]


    return (
        <>
            <div className="header">
                <Header/>
            </div>
            <div className="main">
                <div className="left">

                </div>
                <div className="middle">
                    {data.map(data => (
                        <Article key={data.header} header={data.header} text={data.text} img={data.img}/>
                    ))}
                </div>
                <div className={"right"}>
                    <Profile img={"https://cdn.7tv.app/emote/60b052fe3cadd71dffa73929/4x.webp"} name={"Simon"} desc={"Hi ich bin Simon"}/>
                </div>
            </div>
        </>
    )
}