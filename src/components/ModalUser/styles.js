export const stylesContainer = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 0,
  display: "flex",
  flexDirection: "column",
  borderRadius: ".5rem",
  overflow: "hidden",
  gap: 4,
  maxWidth: { xs: "95%", sm: "90%", md: 400, lg: 450, xl: 500 },
};

export const stylesHeaderModal = {
  p: 4,
  bgcolor: "var(--color-gray-50)",
};

export const stylesButtonClose = {
  position: "absolute",
  right: "5px",
  top: "0",
  p: 0,
  minWidth: 40,
  height: "auto",
  fontSize: "2rem",
  fontWeight: "bold",
  color: "var(--color-gray)",
};
