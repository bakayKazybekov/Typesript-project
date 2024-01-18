import { Link } from 'react-router-dom';
import { CREATE_PRODUCT } from '../../../consts/paths';
import styles from '../ProductsList/ProductList.module.scss';
import { CreateButtonProps } from '../types';

const CreateButton: React.FC<CreateButtonProps> = ({ token }) => {
  if (token) {
    return (
      <div className={styles.create_button_container}>
        <Link className={styles.create_button} to={CREATE_PRODUCT}>
          Создать товар
        </Link>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default CreateButton;
