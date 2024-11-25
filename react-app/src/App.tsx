import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import { BsChevronCompactRight } from "react-icons/bs";
import LikeButton from "./components/LikeButton";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert
          children="I am an alert."
          onClose={() => setAlertVisibility(false)}
        />
      )}
      <BsChevronCompactRight size="40" />
      <Button color="warning" onClick={() => setAlertVisibility(true)}>
        I work
      </Button>
      <div>
        <LikeButton onClick={() => console.log("LikeButton")} />
      </div>
    </div>
  );
}

export default App;
