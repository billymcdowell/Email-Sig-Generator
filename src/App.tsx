import React from "react";
import "./styles.css";
import { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {
  Button,
  Container,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from "@material-ui/core";
import { CheckOutlined, FileCopyOutlined } from "@material-ui/icons";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

interface iState {
  fullName: string;
  position: string;
  address: string;
  mobile: string;
  phone: string;
  copied: boolean;
}

const initialState: iState = {
  fullName: "",
  position: "",
  address: "",
  mobile: "",
  phone: "",
  copied: false
};

export default function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#00856C"
      },
      secondary: {
        main: green[500]
      }
    }
  });
  const [state, setState] = useState(initialState);

  const isStateChanged = () => {
    return JSON.stringify(state) === JSON.stringify(initialState);
  };

  const clearState = () => {
    setState(initialState);
  };

  const copyToClipboard = () => {
    let copyText = document.querySelector(".signature");
    const range = document.createRange();
    if (copyText) {
      range.selectNode(copyText);
    }
    const windowSelection = window.getSelection();
    if (windowSelection) {
      windowSelection.removeAllRanges();
      windowSelection.addRange(range);
    }
    try {
      let successful = document.execCommand("copy");
      console.log(successful ? "Success" : "Fail");
      setState((prevState) => ({
        ...prevState,
        copied: true
      }));
    } catch (err) {
      console.log("Fail");
    }
  };

  const handleChange = (
    event: any
  ) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Container>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              margin: "10rem 0 8rem 0"
            }}
          >
            <img
              width="250"
              src="https://assets-global.website-files.com/607ef0e541214f045ac8c6dc/6093ec57a84987a4c7b3619d_Acadia_logo_green.png"
              alt=""
            />
          </div>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper style={{ padding: "1rem" }}>
                <form noValidate autoComplete="off">
                  <TextField
                    fullWidth={true}
                    required
                    label="Full Name"
                    value={state.fullName}
                    name={"fullName"}
                    onChange={handleChange}
                    color={"primary"}
                    autoFocus={true}
                  />
<<<<<<< HEAD
                  {/* <TextField
                    fullWidth={true}
                    required
                    label="Department"
=======
                  <TextField
                    fullWidth={true}
                    required
                    label="Position"
>>>>>>> 36dd51af03ba9d259d25a5ba92686607f5655632
                    value={state.position}
                    name={"position"}
                    onChange={handleChange}
                    color={"primary"}
<<<<<<< HEAD
                  /> */}
                  <FormControl required style={{ width: "100%" }}>
                    <InputLabel>Department</InputLabel>
                    <Select
                      autoWidth
                      name={"position"}
                      value={state.position}
                      onChange={handleChange}
                    >
                      <MenuItem
                        value={
                          "Sales & Marketing"
                        }
                      >
                        Sales &amp; Marketing
                      </MenuItem>
                      <MenuItem
                        value={"DevOps"}
                      >
                        DevOps
                      </MenuItem>
                      <MenuItem
                        value={
                          "Client Services"
                        }
                      >
                        Client Services
                      </MenuItem>
                    </Select>
                  </FormControl>
=======
                  />
>>>>>>> 36dd51af03ba9d259d25a5ba92686607f5655632
                  <FormControl required style={{ width: "100%" }}>
                    <InputLabel>Office Location</InputLabel>
                    <Select
                      autoWidth
                      name={"address"}
                      value={state.address}
                      onChange={handleChange}
                    >
                      <MenuItem
                        value={
                          "Broadgate Quarter, 7th Floor, One Snowden Street, London EC2A 2DQ"
                        }
                      >
                        London
                      </MenuItem>
                      <MenuItem
                        value={"93 Longwater Circle, Norwell, MA  02061"}
                      >
                        Boston
                      </MenuItem>
                      <MenuItem
                        value={
                          "54 Fitzwilliam Square, Dublin 2, D02 X308, Ireland"
                        }
                      >
                        Dublin
                      </MenuItem>
                      <MenuItem value={"Remote"}>Remote</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    fullWidth={true}
                    required
                    label="Office Phone"
                    value={state.phone}
                    name={"phone"}
                    onChange={handleChange}
                    color={"primary"}
                  />
                  <TextField
                    fullWidth={true}
                    label="Mobile"
                    value={state.mobile}
                    name={"mobile"}
                    onChange={handleChange}
                    color={"primary"}
                  />
                  <Button
                    style={{
                      marginTop: "1rem"
                    }}
                    disabled={isStateChanged()}
                    onClick={clearState}
                    color={"primary"}
                  >
                    Clear
                  </Button>
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper style={{ textAlign: "left", padding: "1rem" }}>
                {state.fullName && state.position && state.phone ? (
                  <div>
                    <div className="signature">
                      <p
                        style={{
                          fontFamily: "OpenSans-Semibold, Open Sans",
                          fontWeight: 600,
                          fontSize: "16px",
                          color: "#575756",
                          marginBottom: 0
                        }}
                      >
                        <strong>{state.fullName}</strong>
                      </p>
                      <p
                        style={{
                          fontFamily: "OpenSans-Semibold, Open Sans",
                          color: "#878787",
                          fontSize: "12px",
                          fontWeight: 600,
                          marginTop: 0
                        }}
                      >
                        {state.position}
                      </p>
                      <img
                        width="130"
                        src="https://assets-global.website-files.com/607ef0e541214f045ac8c6dc/6093ec57a84987a4c7b3619d_Acadia_logo_green.png"
                        alt=""
                      />
                      <p
                        style={{
                          fontFamily: "OpenSans-Semibold, Open Sans",
                          color: "#878787",
                          fontSize: "12px",
                          fontWeight: 600,
                          marginBottom: 0
                        }}
                      >
                        {state.address}
                      </p>
                      <p
                        style={{
                          fontFamily: "OpenSans-Semibold, Open Sans",
                          color: "#878787",
                          fontSize: "12px",
                          fontWeight: 600,
                          marginBottom: 0,
                          marginTop: "4px"
                        }}
                      >
                        office
                        <span style={{ color: "#575756" }}>
                          {" "}
                          {state.phone}{" "}
                        </span>
                        {state.mobile ? "mobile" : ""}
                        {state.mobile ? (
                          <span style={{ color: "#575756" }}>
                            {" "}
                            {state.mobile}
                          </span>
                        ) : (
                          ""
                        )}
                      </p>
                      <a
                        style={{
                          textDecoration: "none !important",
                          fontFamily: "OpenSans-Semibold, Open Sans",
                          fontSize: "12px"
                        }}
                        href="https://acadia.inc"
                      >
                        <span
                          style={{
                            fontWeight: 400,
                            color: "#00856c",
                            textDecoration: "none !important"
                          }}
                        >
                          www.acadia.inc
                        </span>
                      </a>
                      <div>
                        <br />
                        <a href="https://www.youtube.com/channel/UCsMyFt94Jyfwo-ecLBpy5xw">
                          <img
                            src="https://uploads-ssl.webflow.com/607ef0e541214f045ac8c6dc/609e7c52a6e283df61fc0489_Youtube.png"
                            style={{
                              width: "100%",
                              maxWidth: "32px",
                              display: "inline",
                              border: "0px",
                              marginRight: "0.5rem"
                            }}
                            width="32"
                            alt=""
                          />
                        </a>
                        <a href="https://twitter.com/AcadiaSoft_">
                          <img
                            src="https://uploads-ssl.webflow.com/607ef0e541214f045ac8c6dc/609e7c51e24e660901fc6a36_Twitter.png"
                            style={{
                              width: "100%",
                              maxWidth: "32px",
                              display: "inline",
                              border: "0px",
                              marginRight: "0.5rem"
                            }}
                            width="32"
                            alt=""
                          />
                        </a>
                        <a href="https://www.linkedin.com/company/acadiasoft-inc">
                          <img
                            src="https://uploads-ssl.webflow.com/607ef0e541214f045ac8c6dc/609e7c5165fead4ae049e0d7_Linkedin.png"
                            style={{
                              width: "100%",
                              maxWidth: "32px",
                              display: "inline",
                              border: "0px"
                            }}
                            width="32"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <Button
                      style={{
                        marginTop: "1rem"
                      }}
                      onClick={copyToClipboard}
                      endIcon={
                        state.copied ? <CheckOutlined /> : <FileCopyOutlined />
                      }
                    >
                      {state.copied ? "Copied" : "Copy to clipboard"}
                    </Button>
                  </div>
                ) : (
                  "Please complete all fields"
                )}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
}
