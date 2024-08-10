import css from "./Profile.module.css";

export default function Profile({
  data: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={css.cardContainer}>
      <div className={css.userInfo}>
        <img className={css.userImg} src={avatar} alt="User avatar" />
        <p className={css.userName}>{username}</p>
        <p className={css.userText}>@{tag}</p>
        <p className={css.userText}>{location}</p>
      </div>
      <ul className={css.list}>
        <li className={css.item}>
          <span>Followers</span> <span className={css.accent}>{followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span> <span className={css.accent}>{views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span className={css.accent}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
