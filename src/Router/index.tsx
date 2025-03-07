import { Routes, Route, BrowserRouter } from "react-router-dom";
import { NotFound } from "../view/pages/NotFound";
import { DecimoTerceiro } from "../view/pages/DecimoTerceiro";
import { CltxPj } from "../view/pages/cltxpj";
import { Dashboard } from "../view/pages/Dashboard";
import { PageLoader } from "../components/PageLoader";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/decimoterceiro" element={<DecimoTerceiro />}></Route>
        <Route path="/cltxpj" element={<CltxPj />}></Route>
        <Route path="/pageloader" element={<PageLoader />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
