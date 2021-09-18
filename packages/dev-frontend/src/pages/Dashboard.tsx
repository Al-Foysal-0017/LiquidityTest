import { Container } from "theme-ui";
import { Trove } from "../components/Trove/Trove";
import { Stability } from "../components/Stability/Stability";
import { SystemStats } from "../components/SystemStats";
import { PriceManager } from "../components/PriceManager";
import { Staking } from "../components/Staking/Staking";

export const Dashboard: React.FC = () => (
  <Container variant="columns" style={{ padding: "0 15px" }}>
    <Container>
      <h2
        style={{
          background: "#1e3e35",
          color: "#fff",
          textTransform: "uppercase",
          textAlign: "center",
          padding: "12px",
          borderRadius: "5px"
        }}
        className="box-shadow-inner"
      >
        Borrow LUSD against ETH at 0% interest.
      </h2>
      <h4
        style={{
          background: "#1e3e35",
          color: "#fff",
          textTransform: "uppercase",
          textAlign: "center",
          padding: "12px",
          borderRadius: "5px"
        }}
        className="box-shadow-inner"
      >
        Stake your LUSD, swap your LUSD for other assets at{" "}
        <a href="https://main.ddexx.io/">dDEXX</a>, cash it out to fiat, or do with it as you please.
        100% Decentralized.
      </h4>
    </Container>
    <Container variant="left">
      <Trove />
      <Stability />
      <Staking />
    </Container>

    <Container variant="right">
      <SystemStats />
      <PriceManager />
    </Container>
  </Container>
);
