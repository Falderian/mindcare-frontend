import { Box, Modal, Typography } from "@mui/material";

interface BaseModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  actions?: React.ReactNode;
}

export const BaseModal = ({
  open,
  onClose,
  title,
  children,
  actions,
}: BaseModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          p: 4,
          borderRadius: 2,
          boxShadow: 24,
          minWidth: "20%",
          maxWidth: "40%",
        }}
      >
        {title && (
          <Typography variant="h6" mb={2}>
            {title}
          </Typography>
        )}
        {children}
        {actions && <Box mt={3}>{actions}</Box>}
      </Box>
    </Modal>
  );
};
