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
import ButtonAdd from "../../components/ButtonAdd";
import { useNavigate } from "react-router-dom";
import ButtonScrollTop from "../../components/ButtonScrollTop";

function Dashboard() {
  const { userHobbies, userGroups } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <Grid>
      <HeaderContainer />
      <Content>
        <ModalPhrase />
        <Box>
          {userHobbies.length > 0 ? (
            <>
              <DisplayCarouselHobbies />
              <ButtonAdd
                size={"large"}
                theme={"primary"}
                onClick={() => navigate("/dashboard/criar-grupos")}
              />
            </>
          ) : (
            <NoContent>Sem grupos para mostrar</NoContent>
          )}
        </Box>

        <Container>
          <Box>
            {userGroups.length > 0 ? (
              <>
                <div>
                  <h3>Seus Grupos</h3>
                </div>
                <DisplayCards />
              </>
            ) : (
              <NoContent>Sem grupos para mostrar</NoContent>
            )}
          </Box>
          <DisplayAdcGroups />
        </Container>
        <SugestionGroupsCarousel />
      </Content>
      <>
        <ButtonScrollTop />
        <Footer />
      </>
    </Grid>
  );
}

export default Dashboard;
