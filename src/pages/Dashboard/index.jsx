
import HeaderContainer from "../../components/HeaderContainer";
import Footer from "../../components/Footer";
import { Container, Content, Grid } from "./styles";
import CardTeste from "../../components/CardTeste";
import CardTeste2 from "../../components/CardTeste2";


function Dashboard() {
  return (

    <Grid>
      <HeaderContainer />
      <Content>
        <Container>
          <CardTeste/>
          {/* <CardTeste2/> */}
        </Container>
      </Content>
      <Footer />
    </Grid>

  );
}

export default Dashboard;
