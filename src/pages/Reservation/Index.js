import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import supabase from "../../supabaseClient";
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
import { services } from "../LandingPages/Coworking/sections/servicesData";

import NavBar from "pages/LandingPages/Coworking/NavBar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";

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

    const reservations = JSON.parse(localStorage.getItem("reservations") || "[]");
    reservations.push(form);
    localStorage.setItem("reservations", JSON.stringify(reservations));
    const { data, error } = await supabase.from("reservations").insert([form]).select();

    if (error) {
      console.error(error);
      setSnackbar({ open: true, severity: "error", message: "Chyba při ukládání rezervace." });
      return;
    }

    // eslint-disable-next-line no-undef
    const { error: emailError } = await supabase.functions.invoke("send-reservation-email", {
      body: data[0],
    });
    if (emailError) {
      console.error(emailError);
      setSnackbar({ open: true, severity: "error", message: "Chyba při odesílání e-mailu." });
      return;
    }

    setSnackbar({
      open: true,
      severity: "success",
      message: "Rezervace uložena.Budeme Vás za nedlouho kontaktovat",
    });
    setForm({
      name: "",
      phone: "",
      email: "",
      service: "",
      date: new Date(),
      timeOfDay: "",
    });
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
                      <MKButton type="submit" variant="gradient" color="info">
                        Rezervovat
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
