import { useContext } from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  TextField,
  FormControl,
} from "@mui/material";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  stylesButtonClose,
  stylesContainer,
  stylesHeaderModal,
} from "./styles";
import { ButtonForm } from "../ButtonForm";
import { api_habits } from "../../services/api";
import { UserContext } from "../../Context/Provider/User";
import { toast } from "react-toastify";

export function ModalUser({ open, setOpen }) {
  const handleClose = () => {
    reset();
    setOpen(false);
  };
  const { user } = useContext(UserContext);

  const formSchema = yup.object().shape({
    username: yup.string().required("Nome de usuário obrigatório!"),
    email: yup.string().email("Email inválido").required("Email obrigatório!"),
  });

  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const formSubmit = (data) => {
    api_habits
      .patch(`/users/${user.id}/`, data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then(({ data }) => {
        console.log(data);
        toast.success("Perfil atualizado!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((_) => {
        toast.error("Nome de usuário já está em uso!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={stylesContainer}>
          <Box sx={stylesHeaderModal}>
            <Button onClick={handleClose} sx={stylesButtonClose}>
              X
            </Button>

            <Typography
              id="modal-modal-title"
              variant="h5"
              component="h2"
              sx={{
                color: "var(--color-dark)",
                fontWeight: "bold",
                letterSpacing: 1,
              }}
            >
              Editar Perfil
            </Typography>
          </Box>

          <Box
            as="form"
            onSubmit={handleSubmit(formSubmit)}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              padding: "32px",
              gap: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FormControl style={{ p: 32, width: "100%", my: 4 }}>
              <TextField
                sx={{ width: "100%" }}
                label="Username"
                {...register("username")}
                error={!!errors?.username}
                helperText={errors?.username?.message}
                defaultValue={user.username}
              />
            </FormControl>
            <FormControl style={{ p: 4, width: "100%", my: 4 }}>
              <TextField
                sx={{ width: "100%" }}
                label="Email"
                {...register("email")}
                error={!!errors?.email}
                helperText={errors?.email?.message}
                defaultValue={user.email}
              />
            </FormControl>
            <ButtonForm tertiary type="submit">
              Atualizar
            </ButtonForm>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
