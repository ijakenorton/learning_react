import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  return (
    <div>
      <Alert>
        Hello <span>WOrld</span>
      </Alert>
      <Button color="secondary" onClick={() => console.log("Clicked")}>
        Click me
      </Button>
    </div>
  );
}

export default App;
