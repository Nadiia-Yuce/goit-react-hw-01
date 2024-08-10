// Компоненти
import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
// Дані JSON
import userData from "../../userData.json";
import friends from "../../friends.json";
import transactions from "../../transactions.json";
// Стилі та все інше
import css from "./App.module.css";

export default function App() {
  return (
    /* Рендер компонентів + передача пропсів з JSON */
    <div className={css.container}>
      <Profile data={userData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
