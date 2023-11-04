import ItemListContainer from "./pages/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import Cart from "./pages/Cart";
import { BrowserRouter,Routes ,Route } from "react-router-dom";
import "bulma/css/bulma.css"
import Layout from "./pages/Layout";
import "./app.css";
import { CartProvider } from "./components/context/CartContext";
import { Checkout } from "./pages/Checkout";

function App() {
  return (
    <div>
        <BrowserRouter>
            <CartProvider>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route index element={ <ItemListContainer props={"Bienvenidos"}/>} />
                        <Route path='/cart' element={ <Cart/>} />
                        <Route path='/checkout' element={ <Checkout/>} />
                        <Route path='/item/:idItem' element={ <ItemDetailContainer/>} />
                        <Route path='/category/:idCategory' element={ <ItemListContainer props={"Bienvenidos"}/>} />
                    </Route>
                </Routes>
            </CartProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
