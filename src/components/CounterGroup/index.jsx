import { Div, Li, Ul } from "./styles";

const CounterGroup = ({ userGroups, userHobbies }) => {
  return (
    <Div>
      <Ul>
        <Li to={`/dashboard/my-groups`}>{userGroups.length || 0} Grupos</Li>
        <Li to={`/dashboard/my-hobbies`}>{userHobbies.length || 0} Hobbies</Li>
      </Ul>
    </Div>
  );
};
export default CounterGroup;
