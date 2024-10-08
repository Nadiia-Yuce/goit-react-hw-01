import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  // Клас для зміни кольору тексту за умови
  const clsxStatus = clsx(css.status, isOnline ? css.isOnline : css.isOffline);
  return (
    <div className={css.friendContainer}>
      <img src={avatar} alt="Avatar" width="100" />
      <p className={css.friendName}>{name}</p>
      {/* Текст всередині тегу за умови */}
      <p className={clsxStatus}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
