import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import { Layout } from "./routes/Layout";
import { WriteQuestion } from "./pages/WriteQuestion";
import { List } from "./pages/List/List";
import { Home } from "./pages/Landing/Home";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Layout />}>            
            <Route index element={<List />} />
            <Route path="/articles/write" element={<WriteQuestion />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);

