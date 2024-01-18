import styles from './ShopCartAlert.module.scss';

type ShopCartAlertProps = {
  shopCartAlert: boolean;
};

const ShopCartAlert: React.FC<ShopCartAlertProps> = ({ shopCartAlert }) => {
  return (
    <>
      {shopCartAlert && (
        <div className={styles.alert}>
          <div className={styles.alert_wrapper}>
            <div className={styles.alert_content}>
              <p>Добавлено в корзину!</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShopCartAlert;
