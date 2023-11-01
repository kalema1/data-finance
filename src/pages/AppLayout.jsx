import NavBar from "../features/NavBar";
import GrowData from "../features/GrowData";
import DataAnalytics from "../features/DataAnalytics";
import TipsTricks from "../features/TipsTricks";
import Card from "../features/Card";
import Footer from "../features/Footer";

export default function AppLayout() {
  return (
    <div>
      <NavBar />
      <GrowData />
      <DataAnalytics />
      <TipsTricks />
      <Card />
      <Footer />
    </div>
  );
}
