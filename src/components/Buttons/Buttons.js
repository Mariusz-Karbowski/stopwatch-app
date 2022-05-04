import styles from './Buttons.module.scss';

const Buttons = ({setStart, setTime}) => {
  
  return (
    <div>
    <button className={styles.button} onClick={() => setStart(true)}>START</button>
    <button className={styles.button} onClick={() => setStart(false)}>STOP</button>
    <button className={styles.button} onClick={() => {setStart(false); setTime(0)}}>RESET</button>
</div>
  );
};
export default Buttons;