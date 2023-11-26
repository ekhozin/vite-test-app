import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = (props: ButtonProps) => {
  const { children, onClick } = props;
    
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  )
};
