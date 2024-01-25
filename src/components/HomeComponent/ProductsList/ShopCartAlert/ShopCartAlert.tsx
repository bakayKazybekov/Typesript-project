import { Transition } from 'react-transition-group';
import styles from './ShopCartAlert.module.scss';

type ShopCartAlertProps = {
  shopCartAlert: boolean;
};

enum AlertState {
  Entering = 'entering',
  Entered = 'entered',
  Exiting = 'exiting',
  Exited = 'exited',
}

const ShopCartAlert: React.FC<ShopCartAlertProps> = ({ shopCartAlert }) => {
  return (
    <>
      <Transition in={shopCartAlert} timeout={350} unmountOnExit={true}>
        {(state: AlertState) => (
          <div className={`${styles.alert} ${styles[`alert_${state}`]}`}>
            <div className={styles.alert_wrapper}>
              <div className={styles.alert_content}>
                <p>Добавлено в корзину!</p>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};

export default ShopCartAlert;
