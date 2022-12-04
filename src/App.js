import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "./page/Todo";
import Home from "./page/Home";
import Infinitescroll from "./page/Infinitescroll";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/scroll" element={<Infinitescroll />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
