import NavBar from "./components/headerComponents/NavBar";
import ItemListContainer from "./pages/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import { BrowserRouter,Routes ,Route } from "react-router-dom";
import "bulma/css/bulma.css"
import Layout from "./pages/Layout";
import "./app.css";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={ <ItemListContainer props={"Bienvenidos"}/>} />
                    <Route exact path='/item/:idItem' element={ <ItemDetailContainer/>} />
                    <Route exact path='/category/:idCategory' element={ <ItemListContainer props={"Bienvenidos"}/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
