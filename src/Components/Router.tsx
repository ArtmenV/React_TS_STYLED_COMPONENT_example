import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Main from "../../Routes/Main/index";
import Search from "../../Routes/Search/index";
import SellCar from "../../Routes/SellCar/index";
import CarDetail from "../../Routes/CarDetail/index";
import BuyCar from "../../Routes/BuyCar/index";
import Footer from "./Footer";
import Header from "../Components/Header";
import Sidebar from "./Commons/Sidebar/Sidebar";
import AdminMain from "../../Routes/Admin/AdminMain";
import AdminHeader from "./Admin/AdminHeader";
import AdminSellList from "../../Routes/Admin/AdminSellList/index";
import AdminCarRegister from "../../Routes/Admin/AdminCarRegister";
import SignUp from "./Auth/SignUp";
import SignIn from "./Auth/SignIn";
import SellApplicationSuccess from "../../Routes/Application/SellApplicationSuccess";
import BuyApplicationSuccess from "../../Routes/Application/BuyApplicationSuccess";
import MyPage from "../../Routes/MyPage";
export default () => {
  return (
    <>
      <Router>
        <Route
          render={({ location }) => {
            if (location.pathname.split("/")[1] !== "admin") {
              return (
                <>
                  <Header />
                  <Sidebar></Sidebar>
                </>
              );
            } else {
              return <AdminHeader></AdminHeader>;
            }
          }}
        ></Route>
        <SignIn></SignIn>
        <SignUp></SignUp>
        <Switch>
          <Route path="/" exact component={Main}></Route>
          <Route path="/search" exact component={Search}></Route>
          <Route path="/sellcar" exact component={SellCar}></Route>
          <Route
            path="/sellcar/success"
            component={SellApplicationSuccess}
          ></Route>
          <Route
            path="/buycar/success"
            component={BuyApplicationSuccess}
          ></Route>
          <Route path="/buycar/:id" exact component={BuyCar}></Route>
          <Route path="/search/:id" exact component={CarDetail}></Route>
          <Route path="/admin" exact component={AdminMain}></Route>
          <Route path="/admin/sellList" exact component={AdminSellList}></Route>
          <Route path="/admin/buyList" exact component={AdminMain}></Route>
          <Route
            path="/admin/registerCar"
            exact
            component={AdminCarRegister}
          ></Route>
          <Route path="/mypage" exact component={MyPage}></Route>
          {/* <Redirect from="*" to="/"></Redirect> */}
        </Switch>
      </Router>
      <Footer></Footer>
    </>
  );
};
