import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ProductFormValues } from "../../Types/types"
import CreateProductComponent from "../../components/CreateProductComponent/CreateProductComponent"
import { useAppDispatch, useAppSelector } from "../../hook"
import { createProductAction, editProductAction, getProductByIdAction } from "../../store/product/actions"

const initialValues: {
  title: string;
  description: string;
  price: string;
} = {
  title: '',
  description: '',
  price: ''
}

const CreateProductContainer = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { product, isLoad, error } = useAppSelector((state) => state.productReducer)
  const { productId } = useParams()
  const [values, setValues] = useState(initialValues)
  const [image, setImage] = useState<string>()

  useEffect(() => {
    if (productId) {
      dispatch(getProductByIdAction(productId))  
    }
  }, [dispatch, productId])
  console.log(product)

  useEffect(() => {
    if (productId && product) {
      setValues(product)
      setImage(product.image)
    }
  }, [product, productId])

  const onSubmit = (data: ProductFormValues) => {
    if (productId) {
      const obj = {
          ...data,
          image: image,
          id: productId,
      }
      dispatch(editProductAction({navigate, ...obj}))
    } else {
      const obj = {
          ...data,
          image: image,
      }
      dispatch(createProductAction({navigate, ...obj}))
    }
  }

  const onImg = () => {
    const img = prompt('Вставьте ссылку на фотографию')
    if (img) {
      setImage(img)
    }
  }

  return <CreateProductComponent
    onSubmit={onSubmit} 
    onImg={onImg} 
    image={image} 
    values={values} 
    isLoad={isLoad}
    error={error}
  />
}

export default CreateProductContainer