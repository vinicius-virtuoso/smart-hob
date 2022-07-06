import { createContext } from "react";
// import { api_habits } from "../../services/api";

export const CountPagesContext = createContext();

export const CountPagesProvider = ({ children }) => {
  //   const [countPage, setCountPage] = useState(1);
  //   const [randomPage, setRandomPage] = useState(1);

  //   const randomPageNumber = () => {
  //     api_habits.get(`/groups/`).then(({ data }) => {
  //       setCountPage(Math.floor(Math.random() * (data.count / 15 - 1) + 1));
  //     });
  //   };

  //   useEffect(() => {
  //     randomPageNumber();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  return (
    <CountPagesContext.Provider value={{}}>
      {children}
    </CountPagesContext.Provider>
  );
};
