import React, { useState } from "react";
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
import { services } from "../LandingPages/Coworking/sections/servicesData";

import NavBar from "pages/LandingPages/Coworking/NavBar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";

function Reservation() {
  // const { search } = useLocation();
  // const serviceParam = new URLSearchParams(search).get("service") || "";
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: new Date(),
  });

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
    if (!form.name || !form.phone || !form.email || !form.service) {
      alert("Vyplňte prosím všechna povinná pole.");
      return;
    }

    const reservations = JSON.parse(localStorage.getItem("reservations") || "[]");
    reservations.push(form);
    localStorage.setItem("reservations", JSON.stringify(reservations));
    alert("Rezervace uložena.");

    await supabase.functions.invoke("send-reservation-email", { body: data[0] });
    alert("Rezervace uložena.");
    setForm({ name: "", phone: "", email: "", service: "", date: new Date() });
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
                        options={{ enableTime: true, dateFormat: "Y-m-d H:i" }}
                        input={{
                          label: "Datum a čas",
                          fullWidth: true,
                          InputLabelProps: { shrink: true },
                        }}
                      />
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
      <MKBox pt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Reservation;
