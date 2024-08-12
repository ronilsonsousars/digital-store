import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Home from "../pages/Home"
import ProductListing from "../pages/ProductListing"
import ProductView from "../pages/ProductView"
import NotFound from "../pages/NotFound"
import Layout from "../layouts/Layout"
function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product-list" element={<ProductListing />} />
          <Route path="/product-view" element={<ProductView />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes