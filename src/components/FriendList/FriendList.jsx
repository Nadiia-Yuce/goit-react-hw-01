import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    // Перебираємо масив об'єктів за допомогою map() і передаємо далі значення окремого об'єкту
    // + Не забуваємо на елементах списку задавати ключі з індитифікаторами
    <ul className={css.friendList}>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}
