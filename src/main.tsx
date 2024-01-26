import React from "react";
import ReactDOM from "react-dom/client";
import { Actions, Home } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { Header, OutletActionApis } from "./components";

import { theme } from "./styles/theme";
import "./styles/global.css";
import { HiHeart } from "react-icons/hi";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/actions" element={<Actions />}>
            <Route path=":actionType" element={<OutletActionApis />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Flex position="absolute" bottom="0" right="0">
        <p
          className="line-1 anim-typewriter"
          style={{ display: "flex", gap: "4px" }}
        >
          Feito por
          <a href="https://allankevinscain.com.br/">Allan Kevin Scain</a>
          <HiHeart style={{ color: "red", opacity: 0.5 }} />
        </p>
      </Flex>
    </ChakraProvider>
  </React.StrictMode>
);
