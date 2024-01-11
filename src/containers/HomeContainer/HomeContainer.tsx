import { deleteProductAction, getProductAction } from '../../store/product/actions'
import { ChangeEvent, FormEvent, useCallback, useEffect, useMemo, useState } from 'react'
import HomeComponent from '../../components/HomeComponent/HomeComponent'
import { ProductType, ShopCartProductType } from '../../Types/types'
import { useAppDispatch, useAppSelector } from '../../hook'

  function HomeContainer () {
  const dispatch = useAppDispatch()
  
  const [ searchProducts, setSearchProducts ] = useState<string>('')
  const [ sortingOpertator, setSortingOperator] = useState('')
  const { products, isLoad, error } = useAppSelector((state) => state.productReducer)
  
  const token = localStorage.getItem('token')
  useEffect(() => {
    if (token) dispatch(getProductAction())
  }, [dispatch, token])
  
  const onDelete = useCallback((id: number) => {
    dispatch(deleteProductAction(id)).then(() => dispatch(getProductAction()))
  }, [dispatch])
  
  const addCart = useCallback((product: ProductType) => {
    const getLocalProducts: ShopCartProductType[] = JSON.parse(localStorage.getItem('products') ?? '[]')
    const obj = {
      ...product,
      uniqueId: Math.random()
    }
    const arr = [...getLocalProducts, obj]
    localStorage.setItem('products', JSON.stringify(arr))
  }, [])
  
  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    if (searchProducts) {
      return filtered.filter((product) => product.title.toLowerCase().startsWith(searchProducts.toLowerCase().trim()))
    }

    return filtered.sort((a: ProductType, b: ProductType): number => {
      switch (sortingOpertator) {
        case 'firstCheap': 
          return +a.price - +b.price;
        case 'firstExpensive':
          return +b.price - +a.price;
        case 'firstNew': 
          return +a.id - +b.id;
        case 'firstOld':
          return +b.id - +a.id;
        case 'withoutFilter':
          return 0
        default:
          return 0
      }
    })
  }, [products, searchProducts, sortingOpertator])
  
  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0) {
      setSearchProducts(e.target.value)
    }
  }

  const onSubmitSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as HTMLFormElement
    const inputElement= target[0] as HTMLInputElement
    setSearchProducts(inputElement.value)
  }

  
  const filters = (operator: string) => {
    setSortingOperator(operator)
  }
  
  
  return (
    <HomeComponent
      onSubmitSearch={onSubmitSearch}
      onChangeSearch={onChangeSearch}
      filters={filters}
      products={filteredProducts}
      onDelete={onDelete}
      addCart={addCart}
      isLoad={isLoad}
      error={error}
    />
  )
  }
  
export default HomeContainer
