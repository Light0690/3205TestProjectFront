import { useEffect, useState } from "react";
import "./App.scss";
import { getUser } from "../api/getUser";


const App = () => {
  const [value, setValue] = useState<any>();
    useEffect(() => {
      (async () => {
        const res = await getUser({ email: "jim@gmail.com", number: "221122" });
        setValue(res);
        
      })();
    }, []);
console.log(value)
  return <div>sdf</div>;
};

export default App;
