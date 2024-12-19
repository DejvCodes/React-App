import sneakers from "./data/data"
import categories from "./data/categories"
import OneSneaker from "./components/OneSneaker"
import { useState } from "react"

const App = () => {
  const [sneakerList, setSneakerList] = useState(sneakers)

  // Function for filtering the type of sneakers
  const typeOfSneakers = (type) => {
    if (type === "vše") {
      setSneakerList(sneakers)
    } else {
      const filteredTypeOfSneakers = sneakers.filter((oneSneaker) => {
        return oneSneaker.type === type
      })
      setSneakerList(filteredTypeOfSneakers)
    }
  }

  // Function to delete sneakers by id
  const deleteOneSneaker = (id) => {
    const filteredSneakerList = sneakerList.filter((oneSneaker) => {
      return oneSneaker.id !== id
    })
    setSneakerList(filteredSneakerList)
  }

  // Function to delete all sneakers
  const deleteAllSneakers = () => {
    setSneakerList([])
  }

  // Reload function
  const reloadAllSneakers = () => {
    setSneakerList(sneakers)
  }

  return (
    <>
      <h1>Sneakers App.</h1>

      <div className="categories">
        <button className="btn" onClick={() => typeOfSneakers("vše")}>Vše</button>
        {categories.map((oneCategory, index) => {
          return <button className="btn" key={index} onClick={() => typeOfSneakers(oneCategory)}>{oneCategory}</button>
        })}
      </div>

      <div className="all-sneakers">
        {sneakerList.map((oneSneaker) => {
          return <div className="one-sneaker" key={oneSneaker.id}>
            <OneSneaker {...oneSneaker} />
            <button className="btn delete" onClick={() => deleteOneSneaker(oneSneaker.id)}>Vymazat</button>
          </div> 
        })} 
      </div>

      <div className="buttons">
        <button className="btn" onClick={deleteAllSneakers}>Vymazat vše</button>
        <button className="btn" onClick={reloadAllSneakers}>Načíst</button>
      </div>
    </>
  )
}

export default App 