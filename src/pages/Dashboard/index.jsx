import HeaderContainer from "../../components/HeaderContainer";
import Footer from "../../components/Footer";
import { Box, Container, Content, Grid, NoContent } from "./styles";
import { DailyPhrases } from "../../components/DailyPrases";
import DisplayCards from "../../components/DisplayCards";
import SugestionGroupsCarousel from "../../components/SugestionGroupsCarousel";
import { useContext } from "react";
import { UserContext } from "../../Context/Provider/User";
import Alternative from "../../components/Alternative";

function Dashboard() {
  const { userHobbies, userGroups } = useContext(UserContext);

  return (
    <Grid>
      <HeaderContainer />
      <Content>
        <Alternative />
        <Box>
          {userHobbies.length > 0 ? (
            <DisplayCards hobbies />
          ) : (
            <NoContent>Sem grupos para mostrar</NoContent>
          )}
        </Box>

        <Container>
          <Box>
            {userGroups.length > 0 ? (
              <DisplayCards groups />
            ) : (
              <NoContent>Sem grupos para mostrar</NoContent>
            )}
          </Box>
        </Container>
        <SugestionGroupsCarousel />
      </Content>
      <Footer />
    </Grid>
  );
}

export default Dashboard;
