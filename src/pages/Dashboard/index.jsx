import HeaderContainer from "../../components/HeaderContainer";
import Footer from "../../components/Footer";
import { Box, Container, Content, Grid, NoContent } from "./styles";
import ModalPhrase from "../../components/ModalPhrase";
import DisplayCards from "../../components/DisplayCards";
import SugestionGroupsCarousel from "../../components/SugestionGroupsCarousel";
import { useContext } from "react";
import { UserContext } from "../../Context/Provider/User";
import DisplayCarouselHobbies from "../../components/DisplayCarouselHobbies";
import DisplayAdcGroups from "../../components/DisplayAdcGroups";

function Dashboard() {
  const { userHobbies, userGroups } = useContext(UserContext);
  

  return (
    <Grid>
      <HeaderContainer />
      <Content>
        <ModalPhrase />
        <Box>
          {userHobbies.length > 0 ? (
            <DisplayCarouselHobbies />
          ) : (
            <NoContent>Sem grupos para mostrar</NoContent>
          )}
        </Box>

        <Container>
          <Box>
            {userGroups.length > 0 ? (
              <DisplayCards />
            ) : (
              <NoContent>Sem grupos para mostrar</NoContent>
            )}
          </Box>
          <DisplayAdcGroups />
        </Container>
        <SugestionGroupsCarousel />
      </Content>
      <Footer />
    </Grid>
  );
}

export default Dashboard;
