import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Login from "../pages/Login";
import RecoveryPassword from "../pages/PasswordRecovery";
import Home from '../pages/Home';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Order';
import NotFound from "../pages/NotFound";
import '../style/global.css';

const app = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/recoveryPassword" element={<RecoveryPassword />} />
                    <Route exact path="/send-email" element={<SendEmail />} />
                    <Route exact path="/new-password" element={<NewPassword />} />
                    <Route exact path="/account" element={<MyAccount />} />
                    <Route exact path="/create" element={<CreateAccount />} />
                    <Route exact path="/orders" element={<Orders />} />
                    <Route exact path="/checkout" element={<Checkout />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>

    );
};

export default app;