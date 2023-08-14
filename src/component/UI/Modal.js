import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import ModalDialog from "@mui/joy/ModalDialog";

export default function ModalCard(props) {
  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ModalDialog
        layout="center"
        size="lg"
        variant="soft"
        sx={{ width: "800px" }}
      >
        <ModalClose />

        <Typography
          component="h2"
          id="modal-title"
          level="h4"
          textColor="inherit"
          fontWeight="lg"
          mb={1}
        >
          Cart Items
        </Typography>
        {props.children}
      </ModalDialog>
    </Modal>
  );
}
