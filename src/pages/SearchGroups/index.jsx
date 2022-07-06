import { useContext, useEffect, useState } from "react";
import ButtonAdd from "../../components/ButtonAdd";
import Footer from "../../components/Footer";
import HeaderSearch from "../../components/HeaderSearch";
import LisSearch from "../../components/ListSearch";
import { UserContext } from "../../Context/Provider/User";
import { api_habits } from "../../services/api";
import { BoxPage, Container, ContentSearch, Grid, Next, Prev } from "./style";
import { useNavigate } from "react-router-dom";

function SearchGroups() {
  const [getGroups, setGetGroups] = useState([]);
  const { token } = useContext(UserContext);
  const [page, setPage] = useState(1);
  const [text, setText] = useState("");

  const navigate = useNavigate();

  const get_groups = () => {
    api_habits
      .get(`/groups/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setGetGroups(data);
      });
  };

  useEffect(() => {
    get_groups();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    api_habits
      .get(`/groups/?search=${text}&page=${page}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setGetGroups(data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, text]);

  const nexPage = () => {
    if (getGroups.next !== null) {
      setPage(page + 1);
    }
  };
  const prevPage = () => {
    if (getGroups.previous !== null) {
      setPage(page - 1);
    }
  };

  return (
    <Grid>
      <HeaderSearch text={text} setText={setText} />
      <ContentSearch>
        <Container>
          <h1>Grupos Disponíveis</h1>
          <LisSearch getGroups={getGroups.results} get_groups={get_groups} />
          <BoxPage>
            <Prev onClick={prevPage}>Anterior</Prev>
            <span>page {page}</span>
            <Next onClick={nexPage}>Proxima</Next>
          </BoxPage>
        </Container>
      </ContentSearch>
      <div className="add">
        <ButtonAdd
          size="small"
          theme="primary"
          onClick={() => navigate("/dashboard/criar-grupos")}
        />
      </div>
      <Footer />
    </Grid>
  );
}

export default SearchGroups;
