import { User } from "../../interfaces/User";

import styles from "./Line.module.scss";

const Line = ({ email, number }: User) => {
  return (
    <div className={styles.wrapper}>
      email : {email}, number : {number}
    </div>
  );
};

export default Line;
