import styles from './Spinner.module.css'; // Importing the CSS module

const Spinner = () => {
  return (
    <div className="w-screen h-screen bg-black/50 flex items-center justify-center absolute z-20">
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Spinner;
