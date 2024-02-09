import { useNavigate } from 'react-router-dom';
import { CREATE_PRODUCT } from '../../../../consts/paths';
import '../ProductList.scss';
import { CreateButtonProps } from '../../types';
import { setIsGetProduct } from '../../../../store/isGetProduct/slice';
import { useAppDispatch } from '../../../../hook';

const CreateButton: React.FC<CreateButtonProps> = ({ token }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  if (token) {
    return (
      <div className="create_button_container">
        <div
          className="create_button"
          onClick={() => {
            navigate(CREATE_PRODUCT);
            dispatch(setIsGetProduct(false));
          }}
        >
          Создать товар
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default CreateButton;
