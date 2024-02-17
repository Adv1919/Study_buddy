import Nav from "../components/Nav"


const Home = () => {

    const authToken = true

    const handleclick = () => {
        console.log('clicked')
    }

    return(
        <div className="Overlay">
        <Nav minimal={false} authToken={authToken} />
        <div className="home">
            <h1>Swipe Right</h1>
            <button className="Primary-button" onClick={handleclick}>
                {authToken ?'Signout':'Create Account'} 
            </button>
        </div>
        </div>
    )
}

export default Home

