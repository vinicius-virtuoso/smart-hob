import HeaderContainer from "../../components/HeaderContainer";
import Footer from "../../components/Footer";
import { Container, Content, Grid } from "./styles";
import { DailyPhrases } from "../../components/DailyPrases";
import CardTeste from "../../components/CardTeste";

function Dashboard() {
  return (
    <Grid>
      <HeaderContainer />
      <Content>
        <DailyPhrases />
        <Container>
          <CardTeste hobbies />
          <CardTeste groups />
        </Container>
      </Content>
      <Footer />
    </Grid>
  );
}

export default Dashboard;
