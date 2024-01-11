import React from "react";
import { HomeComponentProps } from "../../Types/types";
import Interaction from "./Interaction/Interaction";
import ProductsList from "./ProductsList/ProductsList"

const HomeComponent: React.FC<HomeComponentProps> = ({
  onSubmitSearch,
  onChangeSearch,
  filters,
  products,
  onDelete,
  addCart,
  isLoad,
  error,
}) => {
  return (
    <>
      <Interaction
        onSubmitSearch={onSubmitSearch}
        onChangeSearch={onChangeSearch}
        filters={filters}
      />
      <ProductsList
        products={products}
        onDelete={onDelete}
        addCart={addCart}
        isLoad={isLoad}
        error={error}
      />
    </>
  )
}

export default HomeComponent