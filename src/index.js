import styles from './index.css';
import styles2 from './global.less';
import axios from 'axios';


axios.get('http://www.baidu.com');

console.log(styles2);

export default function(props) {
  return (
    <button
      className={styles.button}
      style={{
        fontSize: props.size === 'large' ? 40 : 20,
      }}
    >
      { props.children }
    </button>
  );
}
