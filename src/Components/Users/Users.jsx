import * as axios from "axios";
import react from "react";
import styles from "./user.module.scss";

let Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((Response) => {
          props.setUsers(Response.data.items);
        });
    }
  };

  return (
    <div>
      <button onClick={getUsers}>Get users</button>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img
                src={
                  u.photos.small != null
                    ? u.photos.small
                    : "https://vdostavka.ru/wp-content/uploads/2019/05/no-avatar.png"
                }
                className={styles.userPhoto}
              />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.city}</div>
              <div>{u.location.country}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;