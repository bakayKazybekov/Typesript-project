import { useEffect } from "react"
import { useState } from "react"
import ShopCartComponent from "../../components/ShopCartComponent/ShopCartComponent"
import { ShopCartProductType } from "../../Types/types"

// https://www.npmjs.com/package/redux-persist
// functional programming -> lodash!!! 

const ShopCartContainer = () => {
  const [products, setProducts] = useState<ShopCartProductType[]>([])

  useEffect(() => {
    const getProductsFromLocal = localStorage.getItem('products')
    if (getProductsFromLocal) {
      const products = JSON.parse(getProductsFromLocal)
      setProducts(products)
    }
  }, [])

  const onDelete = (id: number) => {
    // _.filter https://lodash.com/docs/#filter
    const filteredProducts = products.filter((product) => product.uniqueId !== id)
    localStorage.setItem('products', JSON.stringify(filteredProducts));
    setProducts(filteredProducts)
  }
  const onClear = () => {
    localStorage.removeItem('products')
    setProducts([])
  }

  return <ShopCartComponent products={products} onDelete={onDelete} onClear={onClear} />
}

export default ShopCartContainer