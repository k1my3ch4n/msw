import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// const enableMocking = async () => {
//   const { worker } = await import("./mocks/browser");

//   return worker.start();
// };

// enableMocking().then(() => {
//   ReactDOM.createRoot(document.getElementById("root")!).render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
