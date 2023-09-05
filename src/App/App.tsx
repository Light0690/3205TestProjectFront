import { useEffect, useState } from "react";
import cn from "classnames";

import { getUser } from "../api/getUser";

import { User } from "../interfaces/User";
import { AxiosError, isAxiosError } from "axios";

import Form from "../components/Form/Form";
import Line from "../components/Line/Line";

import styles from "./App.module.scss";

const App = () => {
  const [formBody, setFormBody] = useState<User>();
  const [user, setUser] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>();

  useEffect(() => {
    (async () => {
      setLoading(true);
      setUser([]);
      setError(null);

      try {
        if (formBody) {
          const res = await getUser(formBody);
          setUser(res);
          setError(null);
          console.log(1);
        }
      } catch (err) {
        if (isAxiosError(err)) {
          setError(err);
          console.log(err);
        }
      } finally {
        setLoading(false);
      }
    })();
  }, [formBody]);

  const usersTSX = user
    ? user.map((el) => (
        <Line key={el.number} email={el.email} number={el.number} />
      ))
    : "";

  return (
    <div className={cn(styles.wrapper, loading ? styles.wrapper__loading : "")}>
      <div className={styles.wrapper__form}>
        <Form setFormBody={setFormBody} />
        {usersTSX}
        {error ? (
          <h3 className={styles.wrapper__err}>Упс, что-то пошло не так</h3>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default App;
