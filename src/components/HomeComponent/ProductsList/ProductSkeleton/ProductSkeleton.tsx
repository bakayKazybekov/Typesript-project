import Skeleton from 'react-loading-skeleton';
import './ProductSkeleton.scss';

type ProductSkeletonProps = {
  productsLength: number;
};

const ProductSkeleton: React.FC<ProductSkeletonProps> = ({ productsLength }) => {
  console.log('products', productsLength);

  return (
    <div className="skeletons__wrapper">
      <div className="skeletons">
        {Array(productsLength)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="product__skeleton">
              <div className="skeleton__image">
                <Skeleton width={'100%'} height={'100%'} />
              </div>
              <div className="skeleton__text">
                <Skeleton count={5} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductSkeleton;
