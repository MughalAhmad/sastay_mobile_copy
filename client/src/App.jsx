import React, { lazy } from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Layout = lazy(() => import("./pages/customerSideas/Layout"));
const Sale = lazy(() => import("./pages/customerSideas/Sale"));
const Products = lazy(()=> import("./pages/customerSideas/Products"));
const Product = lazy(()=> import("./pages/customerSideas/Product"));
const Wishlist = lazy(()=> import("./pages/customerSideas/Wishlist"));
const AboutUs = lazy(()=> import("./pages/customerSideas/AboutUs"));
const HowToOrder = lazy(()=>import("./pages/customerSideas/HowToOrder"));
const Faqs = lazy(()=>import("./pages/customerSideas/Faqs"));
const Blogs = lazy(()=>import("./pages/customerSideas/Blogs"));

// Dashboard 
const LayoutDashboard = lazy(() => import("./pages/dashboardSides/LayoutDashboard"));
const Dashboard = lazy(()=>import("./pages/dashboardSides/Dashboard"));

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Sale />} />
            <Route path="products" element={<Products />} />
            <Route path="product" element={<Product />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="aboutus" element={<AboutUs/>} />
            <Route path="howtoorder" element={<HowToOrder/>} />
            <Route path="faqs" element={<Faqs/>} />
            <Route path="blogs" element={<Blogs/>} />

            {/* Dashboard */}
          </Route>
          <Route path="/" element={<LayoutDashboard />}>
          <Route path="dashboard" element={<Dashboard/>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
