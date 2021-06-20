import React from 'react';
import './App.scss';
import "antd/dist/antd.css";
import { Layout } from 'antd';
import {

} from '@ant-design/icons';
import { AppHeader } from './components/Header/Header';
import { MainPage } from './components/MainPage/MainPage';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Footer } from './components/Footer/Footer';
import { ShopPage } from './components/ShopPage/ShopPage';
import { ProductPage } from './components/ProductPage/ProductPage';
import { CheckoutPage } from './components/Checkout/Checkout';

const { Content } = Layout;


class App extends React.Component {

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Layout className="site-layout">
            <Layout>
              <AppHeader />
            </Layout>
            <Content >
              <Switch>
                <Route path={`/main`}>
                  <MainPage />
                </Route>
                <Route path={`/shop`}>
                  <ShopPage />
                </Route>
                <Route path={`/product`}>
                  <ProductPage />
                </Route>
                <Route path={`/checkout`}>
                  <CheckoutPage />
                </Route>
                <Route path={`*`}>
                  <Redirect to={'/main'} />
                </Route>
              </Switch>
            </Content>
            <Footer />
          </Layout>
        </Provider>
      </BrowserRouter>
    )
  }
}

export default App;
