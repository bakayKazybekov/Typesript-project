import { Transition } from 'react-transition-group';
import { AlertState } from '../../../Types/types';
import './ShopCartAlert.scss';

type ShopCartAlertProps = {
  shopCartAlert: boolean;
};

const ShopCartAlert: React.FC<ShopCartAlertProps> = ({ shopCartAlert }) => {
  return (
    <Transition in={shopCartAlert} timeout={350} unmountOnExit={true}>
      {(state: AlertState) => (
        <div className={`alert alert__${state}`}>
          <div className="alert__wrapper">
            <div className="alert__content">
              <p>Добавлено в корзину!</p>
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
};

export default ShopCartAlert;
