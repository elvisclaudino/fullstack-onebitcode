import Button from "../Button/Index";
import styles from "./styles.module.css";

export default function Card({ src, title }) {
  return (
    <div className={styles.container}>
      <img src={src} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum magni
          facere a corrupti commodi? Ut, voluptates nobis eligendi placeat
          mollitia quasi officiis beatae. Laudantium iure vitae eligendi officia
          beatae accusantium deserunt nisi explicabo re.
        </p>
        <Button text="Comprar agora" />
      </div>
    </div>
  );
}
