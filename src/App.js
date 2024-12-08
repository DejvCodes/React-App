import sneakers from "./data/data"
import OneSneaker from "./components/OneSneaker"

const App = () => {
  return (
    <div className="all-sneakers">
      {sneakers.map((oneSneaker) => {
        return <OneSneaker key={oneSneaker.id} {...oneSneaker}/>
      })}
    </div>
  )
}

export default App