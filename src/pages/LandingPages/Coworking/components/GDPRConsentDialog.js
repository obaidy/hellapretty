import { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

function GDPRConsentDialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("gdprConsent");
    if (consent === null) {
      setOpen(true);
    }
  }, []);

  const handleChoice = (value) => {
    localStorage.setItem("gdprConsent", value);
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={() => handleChoice(false)}>
      <DialogTitle>Ochrana osobních údajů</DialogTitle>
      <DialogContent>
        <MKTypography variant="body2" color="text">
          Tento web používá cookies. Souhlasíte se zpracováním osobních údajů v souladu s GDPR?
        </MKTypography>
      </DialogContent>
      <DialogActions>
        <MKButton variant="gradient" color="info" onClick={() => handleChoice(true)}>
          Souhlasím
        </MKButton>
        <MKButton variant="outlined" color="secondary" onClick={() => handleChoice(false)}>
          Nesouhlasím
        </MKButton>
      </DialogActions>
    </Dialog>
  );
}

export default GDPRConsentDialog;
