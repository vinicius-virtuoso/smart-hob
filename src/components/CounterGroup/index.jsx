import { Div, Li, Ul } from "./styles";

const CounterGroup = ({ user }) => {
  console.log(user.user);
  return (
    <Div>
      <Ul>
        <Li to={`/dashboard/my-groups`}>{user?.groups?.length || 0} Grupos</Li>
        <Li to={`/dashboard/my-hobbies`}>
          {user?.hobbies?.length || 0} Hobbies
        </Li>
      </Ul>
    </Div>
  );
};
export default CounterGroup;
