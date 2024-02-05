import startwars from "../../assets/poster-sw.jpg";
import Button from "../Button/Index";
import styles from "./styles.module.css";

export default function Card() {
  return (
    <div className={styles.container}>
      <img src={startwars} alt="" />
      <div>
        <h2>Pôster: Star Wars (1977)</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum magni
          facere a corrupti commodi? Ut, voluptates nobis eligendi placeat
          mollitia quasi officiis beatae. Laudantium iure vitae eligendi officia
          beatae accusantium deserunt nisi explicabo re.
        </p>
        <Button />
      </div>
    </div>
  );
}
