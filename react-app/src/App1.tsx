import Alert from "./components/Alert";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import { useState } from "react";
import { BsChevronCompactRight } from "react-icons/bs";
import LikeButton from "./components/LikeButton";
import ExpandableText from "./components/ExpandableText";

function App() {
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <Navbar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
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
        <ExpandableText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          reiciendis dolores. Autem vero fugiat nisi, maxime voluptas
          repellendus sed corrupti maiores accusantium. Accusantium, vero! Magni
          exercitationem voluptatem perferendis eveniet quis!
        </ExpandableText>
      </div>
    </div>
  );
}

export default App;
