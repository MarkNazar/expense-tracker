import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";

import Records from "./pages/Records";
import Expenses from "./pages/Expenses";
import Login from "./pages/Login";
import AppLayout from "./ui/AppLayout";

import GlobalStyles from "./styles/GlobalStyles";
import ProtectedRoute from "./ui/ProtectedRoute";
import { ThemeProvider } from "./context/ThemeContext";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="records" />} />
              <Route path="records" element={<Records />} />
              <Route path="records/:id" element={<Expenses />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-medium)",
              color: "var(--color-blue-dark)",
            },
          }}
        />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
