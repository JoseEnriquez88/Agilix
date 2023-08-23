import styles from "./Cuentas.module.css";
import { useState, React } from "react";
import Button from "./Utils/Button";

const Cuentas=()=>{
  const [displayValue, setDisplayValue] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(displayValue);
        setDisplayValue(result.toString());
      } catch (error) {
        setDisplayValue('Error');
      }
    } else if (value === 'C') {
      setDisplayValue('');
    } else {
      setDisplayValue((prevValue) => prevValue + value);
    }
  };

  return (
    <div className={styles.Cuentas}>
      <div className={styles.display}>{displayValue}</div>
      <div className={styles.buttons}>
        <Button onClick={handleClick} label="7" className={styles.button}/>
        <Button onClick={handleClick} label="8" className={styles.button}/>
        <Button onClick={handleClick} label="9" className={styles.button}/>
        <Button onClick={handleClick} label="/" className={styles.button}/>
        <Button onClick={handleClick} label="4" className={styles.button}/>
        <Button onClick={handleClick} label="5" className={styles.button}/>
        <Button onClick={handleClick} label="6" className={styles.button}/>
        <Button onClick={handleClick} label="*" className={styles.button}/>
        <Button onClick={handleClick} label="1" className={styles.button}/>
        <Button onClick={handleClick} label="2" className={styles.button}/>
        <Button onClick={handleClick} label="3" className={styles.button}/>
        <Button onClick={handleClick} label="-" className={styles.button}/>
        <Button onClick={handleClick} label="0" className={styles.button}/>
        <Button onClick={handleClick} label="C" className={styles.clear_button} />
        <Button onClick={handleClick} label="=" className={styles.equal_button} />
        <Button onClick={handleClick} label="+" className={styles.button}/>
      </div>
    </div>
  );
}


export default Cuentas;
