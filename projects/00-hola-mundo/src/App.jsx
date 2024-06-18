import { TwitterFollowCard } from "./TwitterFollowCard";

function App () {

    return (
        <>
            <section className="App">
                <TwitterFollowCard  userName={"saluroblesteran"} name={"salu robles teran"}/>
                <TwitterFollowCard  userName={"valeburgos"} name={"vale burgos montesano"}/>
                <TwitterFollowCard  userName={"elonmusk"} name={"elon musk"}/>
            </section>
        </>
    )
}

export default App;