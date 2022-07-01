import HeaderContainer from "../../components/HeaderContainer";
import Footer from "../../components/Footer";
import { Container, Content, Grid } from "./styles";
import { DailyPhrases } from "../../components/DailyPrases";

function Dashboard() {
  return (
    <Grid>
      <HeaderContainer />
      <Content>
        <DailyPhrases />
        <Container></Container>
      </Content>
      <Footer />
    </Grid>
  );
}

export default Dashboard;
