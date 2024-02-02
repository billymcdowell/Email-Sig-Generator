import React from "react";
import "./styles.css";
import { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {
  Button,
  Container,
  TextField,
  Collapse,
  IconButton,
  Box,
} from "@material-ui/core";
import {
  CheckOutlined,
  FileCopyOutlined,
  ExpandMoreOutlined,
  ExpandLessOutlined,
} from "@material-ui/icons";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

interface iState {
  fullName: string;
  position: string;
  address: string;
  email: string;
  mobile: string;
  phone: string;
  imgUrl: string;
  imgLink: string;
  url: string;
  link: string;
  youtubeImg: string;
  youtubeLink: string;
  xImg: string;
  xLink: string;
  linkedInImg: string;
  linkedInLink: string;
  copied: boolean;
}

const initialState: iState = {
  fullName: "",
  position: "",
  address: "",
  email: "",
  mobile: "",
  phone: "",
  imgUrl: "",
  imgLink: "",
  url: "",
  link: "",
  youtubeImg: "",
  youtubeLink: "",
  xImg: "",
  xLink: "",
  linkedInImg: "",
  linkedInLink: "",
  copied: false,
};

export default function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#00856C",
      },
      secondary: {
        main: green[500],
      },
    },
  });
  const [state, setState] = useState(initialState);

  const [expanded, setExpanded] = useState(false);

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
        copied: true,
      }));
    } catch (err) {
      console.log("Fail");
    }
  };

  const handleChange = (event: any) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  // var phoneHelperText;
  // if (
  //   state.address === "93 Longwater Circle, Norwell, MA  02061" ||
  //   state.address === "1450 Broadway 7th Floor, New York, NY 10018"
  // ) {
  //   phoneHelperText = "617 501 5504";
  // } else if (
  //   state.address === "54 Fitzwilliam Square, Dublin 2, D02 X308, Ireland"
  // ) {
  //   phoneHelperText = "+353 1 634 4444";
  // } else if (
  //   state.address === "Maurenbrecherstrasse 16, 47803 Krefeld, Deutschland"
  // ) {
  //   phoneHelperText = "+49 2151 928 4800";
  // } else if (
  //   state.address ===
  //   "Broadgate Quarter, 7th Floor, One Snowden Street, London EC2A 2DQ"
  // ) {
  //   phoneHelperText = "+44 (0)203 555 4444";
  // } else if (
  //   state.address ===
  //     "Level 11 Aoyama Palacio Tower, 3-6-7 Kita-Aoyama Minato-Ku, Tokyo 107 - 0061, Japan" ||
  //   state.address ===
  //     "Unit 1801 The Peak Tower, 107 L.P. Leviste Street, Salcedo Village, Makati City, Philippines, 1227"
  // ) {
  //   phoneHelperText = "+81 3 5778 5555";
  // } else {
  //   phoneHelperText = "";
  // }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Container>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              margin: "10rem 0 8rem 0",
            }}
          >
            <img
              width="250"
              src="https://assets-global.website-files.com/607ef0e541214f045ac8c6dc/64d370ea1b07fbe838a2a0f5_Test.svg"
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
                  {/* <TextField
                    fullWidth={true}
                    required
                    label="Department"
                    value={state.position}
                    name={"position"}
                    onChange={handleChange}
                    color={"primary"}
                  /> */}
                  {/* <FormControl required style={{ width: "100%" }}>
                    <InputLabel>Department</InputLabel>
                    <Select
                      autoWidth
                      name={"position"}
                      value={state.position}
                      onChange={handleChange}
                    >
                      <MenuItem value={"Client Service & Integration"}>
                        Client Service &amp; Integration
                      </MenuItem>
                      <MenuItem value={"Community Development"}>
                        Community Development
                      </MenuItem>
                      <MenuItem value={"Corporate Development"}>
                        Corporate Development
                      </MenuItem>
                      <MenuItem value={"Data Integrations"}>
                        Data Integrations
                      </MenuItem>
                      <MenuItem value={"Development"}>Development</MenuItem>
                      <MenuItem value={"DevOps"}>DevOps</MenuItem>
                      <MenuItem value={"Finance"}>Finance</MenuItem>
                      <MenuItem value={"Human Resources"}>
                        Human Resources
                      </MenuItem>
                      <MenuItem value={"Industry & Regulatory Strategy"}>
                        Industry &amp; Regulatory Strategy
                      </MenuItem>
                      <MenuItem value={"Legal"}>Legal</MenuItem>
                      <MenuItem value={"Marketing"}>Marketing</MenuItem>
                      <MenuItem value={"Onboarding"}>Onboarding</MenuItem>
                      <MenuItem value={"Product Development"}>
                        Product Development
                      </MenuItem>
                      <MenuItem value={"Project Management"}>
                        Project Management
                      </MenuItem>
                      <MenuItem value={"Quality Assurance"}>
                        Quality Assurance
                      </MenuItem>
                      <MenuItem value={"Quantitative Services"}>
                        Quantitative Services{" "}
                      </MenuItem>
                      <MenuItem value={"Quaternion - Expert Services"}>
                        Quaternion - Expert Services
                      </MenuItem>
                      <MenuItem value={"Risk & Compliance"}>
                        Risk &amp; Compliance
                      </MenuItem>
                      <MenuItem value={"Sales Americas"}>
                        Sales Americas
                      </MenuItem>
                      <MenuItem value={"Sales APAC"}>Sales APAC</MenuItem>
                      <MenuItem value={"Sales EMEA"}>Sales EMEA</MenuItem>
                      <MenuItem value={"Strategic Clients"}>
                        Strategic Clients
                      </MenuItem>
                      <MenuItem value={"UX"}>UX</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl required style={{ width: "100%" }}>
                    <InputLabel>Office Location</InputLabel>
                    <Select
                      autoWidth
                      name={"address"}
                      value={state.address}
                      onChange={handleChange}
                    >
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
                      <MenuItem
                        value={
                          "Maurenbrecherstrasse 16, 47803 Krefeld, Deutschland"
                        }
                      >
                        Düsseldorf
                      </MenuItem>
                      <MenuItem
                        value={
                          "Broadgate Quarter, 7th Floor, One Snowden Street, London EC2A 2DQ"
                        }
                      >
                        London
                      </MenuItem>
                      <MenuItem
                        value={
                          "Unit 1801 The Peak Tower, 107 L.P. Leviste Street, Salcedo Village, Makati City, Philippines, 1227"
                        }
                      >
                        Manila
                      </MenuItem>
                      <MenuItem
                        value={"1450 Broadway 7th Floor, New York, NY 10018"}
                      >
                        New York
                      </MenuItem>
                      <MenuItem value={""}>Other</MenuItem>
                      <MenuItem
                        value={
                          "Level 11 Aoyama Palacio Tower, 3-6-7 Kita-Aoyama Minato-Ku, Tokyo 107 - 0061, Japan"
                        }
                      >
                        Tokyo
                      </MenuItem>
                    </Select>
                  </FormControl> */}
                  <TextField
                    fullWidth={true}
                    label="Email"
                    value={state.email}
                    name={"email"}
                    onChange={handleChange}
                    color={"primary"}
                  />
                  <TextField
                    fullWidth={true}
                    required
                    label="Office Phone"
                    value={state.phone}
                    name={"phone"}
                    onChange={handleChange}
                    color={"primary"}
                    // helperText={
                    //   phoneHelperText
                    //     ? "No dots. No dashes. Please follow this example: " +
                    //       phoneHelperText
                    //     : "No dots. No dashes."
                    // }
                  />
                  <TextField
                    fullWidth={true}
                    label="Position"
                    value={state.position}
                    name={"position"}
                    onChange={handleChange}
                    color={"primary"}
                  />
                  <TextField
                    fullWidth={true}
                    label="Address"
                    value={state.address}
                    name={"address"}
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
                  <TextField
                    fullWidth={true}
                    label="Website Address"
                    value={state.link}
                    name={"link"}
                    onChange={handleChange}
                    color={"primary"}
                  />
                  <TextField
                    fullWidth={true}
                    label="Website URL"
                    value={state.url}
                    name={"url"}
                    onChange={handleChange}
                    color={"primary"}
                  />
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <TextField
                      fullWidth={true}
                      label="Logo URL"
                      value={state.imgLink}
                      name={"imgLink"}
                      onChange={handleChange}
                      color={"primary"}
                    />
                    <TextField
                      fullWidth={true}
                      label="Logo Image URL"
                      value={state.imgUrl}
                      name={"imgUrl"}
                      onChange={handleChange}
                      color={"primary"}
                    />
                    <TextField
                      fullWidth={true}
                      label="Youtube URL"
                      value={state.youtubeLink}
                      name={"youtubeLink"}
                      onChange={handleChange}
                      color={"primary"}
                    />
                    <TextField
                      fullWidth={true}
                      label="Youtube Image URL"
                      value={state.youtubeImg}
                      name={"youtubeImg"}
                      onChange={handleChange}
                      color={"primary"}
                    />
                    <TextField
                      fullWidth={true}
                      label="X URL"
                      value={state.xLink}
                      name={"xLink"}
                      onChange={handleChange}
                      color={"primary"}
                    />
                    <TextField
                      fullWidth={true}
                      label="X Image URL"
                      value={state.xImg}
                      name={"xImg"}
                      onChange={handleChange}
                      color={"primary"}
                    />
                    <TextField
                      fullWidth={true}
                      label="LinkedIn URL"
                      value={state.linkedInLink}
                      name={"linkedInLink"}
                      onChange={handleChange}
                      color={"primary"}
                    />
                    <TextField
                      fullWidth={true}
                      label="LinkedIn Image URL"
                      value={state.linkedInImg}
                      name={"linkedInImg"}
                      onChange={handleChange}
                      color={"primary"}
                    />
                    <TextField
                      fullWidth={true}
                      label="Logo URL"
                      value={state.imgUrl}
                      name={"imgUrl"}
                      onChange={handleChange}
                      color={"primary"}
                    />
                  </Collapse>
                  <Box
                    style={{
                      display: "flex",
                      marginTop: "1rem",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button
                      disabled={isStateChanged()}
                      onClick={clearState}
                      color={"primary"}
                    >
                      Clear
                    </Button>
                    <IconButton onClick={handleExpandClick}>
                      {expanded ? (
                        <ExpandLessOutlined />
                      ) : (
                        <ExpandMoreOutlined />
                      )}
                    </IconButton>
                  </Box>
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
                          fontFamily:
                            "OpenSans-Semibold, Open Sans, Helvetica, sans-serif",
                          fontWeight: 600,
                          fontSize: "16px",
                          color: "#575756",
                          marginBottom: 0,
                        }}
                      >
                        <strong>{state.fullName}</strong>
                      </p>
                      <p
                        style={{
                          fontFamily:
                            "OpenSans-Semibold, Open Sans, Helvetica, sans-serif",
                          color: "#878787",
                          fontSize: "12px",
                          fontWeight: 600,
                          marginTop: 0,
                        }}
                      >
                        {state.position}
                      </p>
                      <a
                        href={
                          state.imgLink ? state.imgLink : "https://acadia.inc"
                        }
                      >
                        <img
                          width="130"
                          src={
                            state.imgUrl
                              ? state.imgUrl
                              : "https://assets-global.website-files.com/607ef0e541214f045ac8c6dc/6093ec57a84987a4c7b3619d_Acadia_logo_green.png"
                          }
                          alt=""
                        />
                      </a>
                      <p
                        style={{
                          fontFamily:
                            "OpenSans-Semibold, Open Sans, Helvetica, sans-serif",
                          color: "#878787",
                          fontSize: "12px",
                          fontWeight: 600,
                          marginBottom: 0,
                        }}
                      >
                        {state.address}
                      </p>
                      <p
                        style={{
                          fontFamily:
                            "OpenSans-Semibold, Open Sans, Helvetica, sans-serif",
                          color: "#878787",
                          fontSize: "12px",
                          fontWeight: 600,
                          marginBottom: 0,
                          marginTop: "4px",
                        }}
                      >
                        office
                        <a
                          style={{ color: "#575756", textDecoration: "none" }}
                          href={`tel:${state.phone}`}
                        >
                          {" "}
                          {state.phone}{" "}
                        </a>
                        {state.mobile ? "mobile" : ""}
                        {state.mobile ? (
                          <a
                            style={{ color: "#575756", textDecoration: "none" }}
                            href={`tel:${state.mobile}`}
                          >
                            {" "}
                            {state.mobile}
                          </a>
                        ) : (
                          ""
                        )}
                      </p>
                      <a
                        style={{
                          fontFamily:
                            "OpenSans-Semibold, Open Sans, Helvetica, sans-serif",
                          color: "rgb(87, 87, 86)",
                          textDecoration: "none",
                          fontSize: "12px",
                          fontWeight: 600,
                          marginTop: "4px",
                          display: "block",
                        }}
                        href={`mailto:${state.email}`}
                      >
                        {state.email}
                      </a>
                      <a
                        style={{
                          textDecoration: "none",
                          fontFamily:
                            "OpenSans-Semibold, Open Sans, Helvetica, sans-serif",
                          fontSize: "12px",
                        }}
                        href={state.link}
                      >
                        <span
                          style={{
                            fontWeight: 400,
                            color: "#00856c",
                            textDecoration: "none !important",
                          }}
                        >
                          {state.url}
                        </span>
                      </a>
                      <div>
                        <br />
                        <a
                          href={
                            state.youtubeLink
                              ? state.youtubeLink
                              : "https://www.youtube.com/channel/UCsMyFt94Jyfwo-ecLBpy5xw"
                          }
                        >
                          <img
                            src={
                              state.youtubeImg
                                ? state.youtubeImg
                                : "https://uploads-ssl.webflow.com/607ef0e541214f045ac8c6dc/609e7c52a6e283df61fc0489_Youtube.png"
                            }
                            style={{
                              width: "100%",
                              maxWidth: "32px",
                              display: "inline",
                              border: "0px",
                              marginRight: "0.5rem",
                            }}
                            width="32"
                            alt=""
                          />
                        </a>
                        <a
                          href={
                            state.xLink
                              ? state.xLink
                              : "https://twitter.com/AcadiaSoft_"
                          }
                        >
                          <img
                            src={
                              state.xImg
                                ? state.xImg
                                : "https://uploads-ssl.webflow.com/607ef0e541214f045ac8c6dc/609e7c51e24e660901fc6a36_Twitter.png"
                            }
                            style={{
                              width: "100%",
                              maxWidth: "32px",
                              display: "inline",
                              border: "0px",
                              marginRight: "0.5rem",
                            }}
                            width="32"
                            alt=""
                          />
                        </a>
                        <a
                          href={
                            state.linkedInLink
                              ? state.linkedInLink
                              : "https://www.linkedin.com/company/acadiasoft-inc"
                          }
                        >
                          <img
                            src={
                              state.linkedInImg
                                ? state.linkedInImg
                                : "https://uploads-ssl.webflow.com/607ef0e541214f045ac8c6dc/609e7c5165fead4ae049e0d7_Linkedin.png"
                            }
                            style={{
                              width: "100%",
                              maxWidth: "32px",
                              display: "inline",
                              border: "0px",
                            }}
                            width="32"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <Button
                      style={{
                        marginTop: "1rem",
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
