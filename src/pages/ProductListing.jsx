import { useEffect } from "react";
import SectionProductList from "../components/sectionProductList";
import { useLocation } from "react-router-dom";
function ProductListing() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <SectionProductList />
    </div>
  )
}

export default ProductListing
