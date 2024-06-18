import { TwitterFollowCard } from "./TwitterFollowCard";

function App () {
    return (
        <>
            <section className="App">
                <TwitterFollowCard isFollowing={true} userName={"saluroblesteran"} name={"salu robles teran"}/>
                <TwitterFollowCard isFollowing={false} userName={"valeburgos"} name={"vale burgos montesano"}/>
                <TwitterFollowCard isFollowing userName={"elonmusk"} name={"elon musk"}/>
            </section>
        </>
    )
}

export default App;