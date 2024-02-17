import Nav from "../components/Nav"


const Home = () => {

    const authToken= true

    const handleclick = () => {
        console.log('clicked')
    }

    return(
        <>
        <Nav/>
        <div className="home">
            <h1>Swipe Right</h1>
            <button className="Primary-button" onClick={handleclick}>
                {authToken ? 'Signout' : 'Create Account'}
            </button>
        </div>
        </>
    )
}

export default Home