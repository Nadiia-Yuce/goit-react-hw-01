import css from "./App.module.css";
import userData from "../../userData.json";
import Profile from "../Profile/Profile";

export default function App() {
  return (
    <div className={css.container}>
      <Profile data={userData} />
    </div>
  );
}
