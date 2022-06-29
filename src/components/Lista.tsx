import styles from "./style.module.css";

type Props = {
  titulo: string;
  avatar: string;
};

export const Lista = ({ titulo, avatar }: Props) => {
  return (
    <div className={styles.list}>
      <div className={styles.movie}>
        <img className={styles.moimage} src={avatar} alt="" />
        <p>{titulo}</p>
      </div>
    </div>
  );
};
