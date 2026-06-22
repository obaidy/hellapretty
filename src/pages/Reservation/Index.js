import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import MKDatePicker from "components/MKDatePicker";
import MenuItem from "@mui/material/MenuItem";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import NavBar from "pages/LandingPages/Coworking/NavBar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import { services } from "./serviceReservation";

function formatDate(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    return "";
  }

  return date.toISOString().split("T")[0];
}

function Reservation() {
  const { search } = useLocation();
  const serviceParam = new URLSearchParams(search).get("service") || "";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: serviceParam,
    date: new Date(),
    timeOfDay: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  useEffect(() => {
    if (serviceParam) {
      setForm((prev) => ({ ...prev, service: serviceParam }));
    }
  }, [serviceParam]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    if (Array.isArray(date) && date[0]) {
      setForm({ ...form, date: date[0] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.service || !form.timeOfDay) {
      setSnackbar({
        open: true,
        severity: "error",
        message: "Vyplňte prosím všechna povinná pole.",
      });
      return;
    }

    const payload = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      service: form.service,
      date: formatDate(form.date),
      timeOfDay: form.timeOfDay,
    };

    setSubmitting(true);

    try {
      const response = await fetch("/.netlify/functions/send-reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setSnackbar({
        open: true,
        severity: "success",
        message: "Rezervace odeslána. Budeme Vás brzy kontaktovat.",
      });
      setForm({
        name: "",
        phone: "",
        email: "",
        service: "",
        date: new Date(),
        timeOfDay: "",
      });
    } catch (error) {
      console.error(error);
      setSnackbar({
        open: true,
        severity: "error",
        message: "Chyba při odesílání rezervace. Zkuste to prosím znovu.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <NavBar />
      <MKBox component="section" py={6}>
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 3 }}>
                <MKTypography variant="h4" mb={3}>
                  Rezervační formulář
                </MKTypography>
                <MKBox component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <MKInput
                        label="Jméno"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        fullWidth
                        variant="standard"
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MKInput
                        label="Telefon"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        fullWidth
                        variant="standard"
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MKInput
                        type="email"
                        label="Email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        fullWidth
                        variant="standard"
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MKInput
                        select
                        label="Služba"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        fullWidth
                        variant="standard"
                        InputLabelProps={{ shrink: true }}
                      >
                        {services.map((s) => (
                          <MenuItem key={s.title} value={s.title}>
                            {s.title}
                          </MenuItem>
                        ))}
                      </MKInput>
                    </Grid>
                    <Grid item xs={12}>
                      <MKDatePicker
                        value={form.date}
                        onChange={handleDateChange}
                        options={{ enableTime: false, dateFormat: "Y-m-d" }}
                        input={{
                          label: "Datum a čas",
                          fullWidth: true,
                          InputLabelProps: { shrink: true },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MKInput
                        select
                        label="Preferovaný čas"
                        name="timeOfDay"
                        value={form.timeOfDay}
                        onChange={handleChange}
                        fullWidth
                        variant="standard"
                        InputLabelProps={{ shrink: true }}
                      >
                        <MenuItem value="Dopolední">Dopolední</MenuItem>
                        <MenuItem value="Odpolední">Odpolední</MenuItem>
                        <MenuItem value="Večerní">Večerní</MenuItem>
                      </MKInput>
                    </Grid>
                    <Grid item xs={12} textAlign="center" mt={2}>
                      <MKButton type="submit" variant="gradient" color="info" disabled={submitting}>
                        {submitting ? "Odesílání..." : "Rezervovat"}
                      </MKButton>
                    </Grid>
                  </Grid>
                </MKBox>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MuiAlert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </MuiAlert>
      </Snackbar>
      <MKBox pt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Reservation;
