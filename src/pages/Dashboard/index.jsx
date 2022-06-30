import HeaderContainer from "../../components/HeaderContainer";
import { Container, Content, Grid } from "./styles";

function Dashboard() {
  return (
    <Grid>
      <HeaderContainer />
      <Content>
        <Container>dashboard</Container>
      </Content>
      {/* <footer>sdsad</footer> */}
    </Grid>
  );
}

export default Dashboard;
