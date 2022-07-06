import { Div, Li, Ul } from "./styles";

const CounterGroup = ({ userGroups, userHobbies }) => {
  return (
    <Div>
      <Ul>
        <Li>{userGroups.length || 0} Grupos</Li>
        <Li>{userHobbies.length || 0} Hobbies</Li>
      </Ul>
    </Div>
  );
};
export default CounterGroup;
