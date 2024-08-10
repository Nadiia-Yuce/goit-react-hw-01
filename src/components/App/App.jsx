import css from "./App.module.css";
import userData from "../../userData.json";
import friends from "../../friends.json";
import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";

export default function App() {
  return (
    <div className={css.container}>
      <Profile data={userData} />
      <FriendList friends={friends} />
    </div>
  );
}
