import { RouterProvider } from "react-router"; //RouterProvider để cung cấp router cho toàn bộ ứng dụng 
import { router } from "./routes";

export default function App() {
  return <RouterProvider router={router} />;
}
