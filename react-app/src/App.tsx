import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="warning" onClick={() => console.log("Clicked")}>
        I work
      </Button>
    </div>
  );
}

export default App;
