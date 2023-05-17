import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import ProductDetails from "../components/products/ProductDetails";
import Collection from "../pages/collection/Collection";
import Search from "../components/search/Search";
import LoginSignup from "../pages/user/LoginSignup";
import MyAccount from "../pages/user/account/MyAccount";
import UpdateProfile from "../pages/user/account/profile/UpdateProfile";
import UpdatePassword from "../pages/user/account/profile/UpdatePassword";
import ForgotPassword from "../pages/user/account/profile/ForgotPassword";
import ResetPassword from "../pages/user/account/profile/ResetPassword";
import Cart from "../pages/cart/Cart";
import Shipping from "../pages/cart/shipping/Shipping";
import ConfirmOrder from "../pages/cart/confirmOrder/ConfirmOrder";
import WrapPayment from "../pages/cart/payment/WrapPayment";
import OrderSuccess from "../pages/cart/orderSuccess/OrderSuccess";
import Orders from "../pages/orders/Orders";
import OrderDetails from "../pages/orders/OrderDetails";
import ADashboard from "../pages/Admin/dashboard/ADashboard";

import { ProtectedRouteForAdmin, ProtectedRouteForUser } from "../Rconfig/AuthRoutes";
import AllProducts from "../pages/Admin/allProducts/AllProducts";
import NewProduct from "../pages/Admin/newProduct/NewProduct";
import UpdateProduct from "../pages/Admin/updateProduct/UpdateProduct";
import OrderList from "../pages/Admin/orderList/OrderList";
import ProcessOrder from "../pages/Admin/processOrder/ProcessOrder";
import UserList from "../pages/Admin/userLIst/UserList";
import UpdateUser from "../pages/Admin/updateUser/UpdateUser";
import ProductReviews from "../pages/Admin/productReviews/ProductReviews";
import Notfoundpage from "../pages/notfound/404Notfound";
import Mclaren from "../pages/ExtraPages/Mclaren720";
import Mclaren570 from "../pages/ExtraPages/Mclaren570";
import Mclaren12c from "../pages/ExtraPages/Mclaren12c";
import Mclaren600lt from "../pages/ExtraPages/Mclaren600lt";
import MclarenSpeedtail from "../pages/ExtraPages/MclarenSpeedtail";
import ContactUs from "../pages/ExtraPages/ContactUs";
import AboutUs from "../pages/ExtraPages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Notfoundpage/>
  },
  {
    path: "/product/:id",
    element: <ProductDetails />,
  },
  {
    path: "/collection",
    element: <Collection />,
  },
  {
    path: "/mclaren-720s",
    element: <Mclaren />,
  },
  {
    path: "/mclaren-570s",
    element: <Mclaren570 />,
  },
  {
    path: "/mclaren-12c",
    element: <Mclaren12c/>,
  },
  {
    path: "/mclaren-600lt",
    element: <Mclaren600lt/>,
  },
  {
    path: "/mclaren-speed-tail",
    element: <MclarenSpeedtail/>,
  },
  {
    path: "/contact-us",
    element: <ContactUs/>,
  },
  {
    path: "/about-us",
    element: <AboutUs/>,
  },
  {
    path: "/collection/:keyword",
    element: <Collection />,
  },
  {
    path: "/login",
    element: <LoginSignup />,
  },
  {
    path: "/account",
    element:<ProtectedRouteForUser> <MyAccount /> </ProtectedRouteForUser>,
  },
  {
    path: "/me/update",
    element:<ProtectedRouteForUser> <UpdateProfile /> </ProtectedRouteForUser>,
  },
  {
    path: "/me/password/update",
    element:<ProtectedRouteForUser> <UpdatePassword /> </ProtectedRouteForUser>,
  },
  {
    path: "/password/forgot",
    element: <ForgotPassword />,
  },
  {
    path: "/password/reset/:token",
    element: <ResetPassword />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/login/shipping",
    element:<ProtectedRouteForUser> <Shipping /> </ProtectedRouteForUser>,
  },
  {
    path: "/order/confirm",
    element:<ProtectedRouteForUser> <ConfirmOrder /> </ProtectedRouteForUser>,
  },
  {
    path: "/process/payment",
    element:<ProtectedRouteForUser> <WrapPayment /> </ProtectedRouteForUser>,
  },
  {
    path: "/success",
    element:<ProtectedRouteForUser> <OrderSuccess /> </ProtectedRouteForUser>,
  },
  {
    path: "/orders",
    element:<ProtectedRouteForUser> <Orders /> </ProtectedRouteForUser>,
  },
  {
    path: "/order/:id",
    element:<ProtectedRouteForUser> <OrderDetails /> </ProtectedRouteForUser>,
  },
  {
    path: "/search",
    element: <Search />,
  },

  // admin
  {
    path: "/admin/dashboard",
    element: ( <ProtectedRouteForAdmin> <ADashboard /> </ProtectedRouteForAdmin> ),
  },
  {
    path: "/admin/products",
    element: ( <ProtectedRouteForAdmin> <AllProducts /> </ProtectedRouteForAdmin> ),
  },
  {
    path: "/admin/product",
    element: ( <ProtectedRouteForAdmin> <NewProduct /> </ProtectedRouteForAdmin> ),
  },
  {
    path: "/admin/product/:id",
    element: ( <ProtectedRouteForAdmin> <UpdateProduct /> </ProtectedRouteForAdmin> ),
  },
  {
    path: "/admin/orders",
    element: ( <ProtectedRouteForAdmin> <OrderList /> </ProtectedRouteForAdmin> ),
  },
  {
    path: "/admin/order/:id",
    element: ( <ProtectedRouteForAdmin> <ProcessOrder /> </ProtectedRouteForAdmin> ),
  },
  {
    path: "/admin/users",
    element: ( <ProtectedRouteForAdmin> <UserList /> </ProtectedRouteForAdmin> ),
  },
  {
    path: "/admin/user/:id",
    element: ( <ProtectedRouteForAdmin> <UpdateUser /> </ProtectedRouteForAdmin> ),
  },
  {
    path: "/admin/reviews",
    element: ( <ProtectedRouteForAdmin> <ProductReviews /> </ProtectedRouteForAdmin> ),
  },
]);

export default router;
