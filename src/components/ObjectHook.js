import { useState } from "react";

const ObjectHook = () => {
  const [user, setUser] = useState({ firstName: "", lastName: "" });
  const firstNameClick = (e)=>{
    setUser({...user,firstName : e.target.value})
  }
  const lastNameClick = (e)=>{
    setUser({...user,lastName : e.target.value})
  }
  return (
    <form>
      <input type="text" value={user.firstName} onChange={firstNameClick}/>
      <input type="text" value={user.lastName} onChange={lastNameClick}/>
      <h2>first name:{user.firstName}</h2>
      <h2>last name:{user.lastName}</h2>
      <div>
        {JSON.stringify(user)}
      </div>
    </form>
  );
};

export default ObjectHook;
