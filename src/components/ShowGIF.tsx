import { GifType } from "../App.js";
import { ApiGIF } from "./ApiGIF.js";
import styles from "./ShowGIF.module.css";

type props = {
  gifs: GifType[];
};

const ShowGIF = (props: props) => {
  return (
    <div>
      {props.gifs.map((item, index: number) => {
        return (
          <div key={item.url}>
            <img className={styles.gif} src={item.url} />
          </div>
        );
      })}
    </div>
  );
};

export default ShowGIF;
