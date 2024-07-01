import UserProps from "../types/User.interface"

const User = ({ id, name, email }: UserProps) => {

  return (
    <div>
      <h3>{id}.{name}</h3>
      <p>{email}</p>
      <hr/>
    </div>
  )
}




export default User