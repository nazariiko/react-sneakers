import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home } from './pages';
import { Favorites, FavoritesEmpty } from './pages/Favorites';

import { Header } from './components/Header';
import { Overlay } from './components/Overlay';

export const AppContext = React.createContext({});
export const isAddedContext = React.createContext();
export const isLikedContext = React.createContext();

function App() {
  const [cartVisibility, setCartVisibility] = React.useState(false);
  const [productsIsLoaded, setProductsIsLoaded] = React.useState(false);
  const [context, setContext] = React.useState({
    products: [],
    cartProducts: [],
    favoritesProducts: [],
  });

  const handleOpenCart = React.useCallback(() => {
    setCartVisibility(true);
  }, []);

  const handleCloseCart = () => {
    setCartVisibility(false);
  };

  const handleAddProduct = React.useCallback((obj) => {
    axios.post('http://localhost:3001/cart', obj);
    setContext((prevState) => ({
      ...prevState,
      cartProducts: [...prevState.cartProducts, obj],
    }));
  }, []);

  const handleDeleteProduct = React.useCallback((id) => {
    axios.delete(`http://localhost:3001/cart/${id}`);
    setContext((prevState) => {
      const curState = prevState.cartProducts.filter((obj) => id !== obj.id);
      return {
        ...prevState,
        cartProducts: curState,
      };
    });
  }, []);

  const handleLikeProduct = React.useCallback((obj) => {
    axios.post('http://localhost:3001/favorites', obj);
    setContext((prevState) => ({
      ...prevState,
      favoritesProducts: [...prevState.favoritesProducts, obj],
    }));
  }, []);

  const handleUnlikeProduct = React.useCallback((id) => {
    axios.delete(`http://localhost:3001/favorites/${id}`);
    setContext((prevState) => {
      const curState = prevState.favoritesProducts.filter((obj) => id !== obj.id);
      return {
        ...prevState,
        favoritesProducts: curState,
      };
    });
  }, []);

  const isProductAdded = React.useCallback(
    (id) => {
      return Boolean(context.cartProducts.find((obj) => id === obj.id));
    },
    [context.cartProducts],
  );

  const isProductLiked = React.useCallback(
    (id) => {
      return Boolean(context.favoritesProducts.find((obj) => id === obj.id));
    },
    [context.favoritesProducts],
  );

  React.useEffect(() => {
    try {
      axios.get('http://localhost:3001/items').then((res) => {
        setContext((prevState) => ({
          ...prevState,
          products: res.data,
        }));
        setProductsIsLoaded(true)
      });

      axios.get('http://localhost:3001/cart').then((res) => {
        setContext((prevState) => ({
          ...prevState,
          cartProducts: res.data,
        }));
      });

      axios.get('http://localhost:3001/favorites').then((res) => {
        setContext((prevState) => ({
          ...prevState,
          favoritesProducts: res.data,
        }));
      });

    } catch(e) {
      console.log(e);
    }
    
  }, []);

  return (
    <Router>
      <isLikedContext.Provider value={isProductLiked}>
        <isAddedContext.Provider value={isProductAdded}>
          <AppContext.Provider value={context}>
            <div className="wrapper">
              {cartVisibility && (
                <Overlay onCloseCart={handleCloseCart} handleDeleteProduct={handleDeleteProduct} />
              )}
              <Header onOpenCart={handleOpenCart} />
              <Route exact path="/">
                <Home
                  handleAddProduct={handleAddProduct}
                  handleDeleteProduct={handleDeleteProduct}
                  handleLikeProduct={handleLikeProduct}
                  handleUnlikeProduct={handleUnlikeProduct}
                  productsIsLoaded={productsIsLoaded}
                />
              </Route>
              <Route exact path="/favorites">
                {!!context.favoritesProducts.length ? (
                  <Favorites
                    handleAddProduct={handleAddProduct}
                    handleDeleteProduct={handleDeleteProduct}
                    handleLikeProduct={handleLikeProduct}
                    handleUnlikeProduct={handleUnlikeProduct}
                  />
                ) : (
                  <FavoritesEmpty />
                )}
              </Route>
            </div>
          </AppContext.Provider>
        </isAddedContext.Provider>
      </isLikedContext.Provider>
    </Router>
  );
}

export default App;
