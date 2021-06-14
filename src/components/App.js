const { useEffect, useState } = require("react")

// create your App component here
function App() {
    const [dogImg, setDogImg] = useState("");

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => setDogImg(data.message))
    },[])

    return(
        <div>
            {dogImg ? 
            <img src={dogImg} alt="A Random Dog" />
            : <p>Loading...</p>
            }
        </div>
    )
}

export default App;