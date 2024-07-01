import { MOCK_USERS } from "../data/mock-users"
import User from "../components/User"
import UserProps from "../types/User.interface";

const users: UserProps[] = MOCK_USERS;

const Users = () => {
  return (
    <div className="user">
      {users.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </div>
  )
}

export default Users