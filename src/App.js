import sneakers from "./data/data"
import OneSneaker from "./components/OneSneaker"
import { useState } from "react"

const App = () => {
  const [sneakerList, setSneakerList] = useState(sneakers)

  const deleteOneSneaker = (id) => {
    const filteredSneakerList = sneakerList.filter((oneSneaker) => {
      return oneSneaker.id !== id
    })
    setSneakerList(filteredSneakerList)
  }

  const deleteAllSneakers = () => {
    setSneakerList([])
  }

  const reloadAllSneakers = () => {
    setSneakerList(sneakers)
  }

  return (
    <>
      <h1>Sneakers List.</h1>
      <div className="all-sneakers">
        {sneakerList.map((oneSneaker, index) => {
          return <div className="one-sneaker" key={index}>
            <OneSneaker {...oneSneaker} />
            <button className="btn delete" onClick={() => deleteOneSneaker(oneSneaker.id)}>Vymazat</button>
          </div>
        })}
      </div>

      <div className="buttons">
        <button className="btn delete-all" onClick={deleteAllSneakers}>Delete All</button>
        <button className="btn reload" onClick={reloadAllSneakers}>Reload</button>
      </div>
    </>
  )
}

export default App