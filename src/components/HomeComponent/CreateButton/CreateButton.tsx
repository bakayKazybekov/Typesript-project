import { Link } from 'react-router-dom';
import { CREATE_PRODUCT } from '../../../consts/paths';
import '../ProductsList/ProductList.scss';
import { CreateButtonProps } from '../types';

const CreateButton: React.FC<CreateButtonProps> = ({ token }) => {
  if (token) {
    return (
      <div className="create_button_container">
        <Link className="create_button" to={CREATE_PRODUCT}>
          Создать товар
        </Link>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default CreateButton;
