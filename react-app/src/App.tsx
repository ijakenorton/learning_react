import Listgroup from "./components/ListGroup"

function App() {
  var items = ["New York", "Wellington", "Dunedin"];

  return (
    <div className="App">
      <Listgroup items={items} heading="Cities"/>
    </div>
  )
}

export default App
