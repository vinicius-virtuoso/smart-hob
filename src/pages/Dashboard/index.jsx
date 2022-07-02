import HeaderContainer from "../../components/HeaderContainer";
import Footer from "../../components/Footer";
import { Container, Content, Grid } from "./styles";
import { DailyPhrases } from "../../components/DailyPrases";
import DisplayCards from "../../components/DisplayCards";
import SugestionGroupsCarousel from "../../components/SugestionGroupsCarousel";

function Dashboard() {
  return (
    <Grid>
      <HeaderContainer />
      <Content>
        <DailyPhrases />
        <DisplayCards hobbies />
        <Container>
          <DisplayCards groups />
        </Container>
        <SugestionGroupsCarousel />
      </Content>
      <Footer />
    </Grid>
  );
}

export default Dashboard;
