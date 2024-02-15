import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  {
    name: "Living Room",
    id: "1",
    isOn: false,
  },
  {
    name: "Kitchen",
    id: "2",
    isOn: false,
  },
  {
    name: "Bedroom",
    id: "3",
    isOn: false,
  },
  {
    name: "Bathroom",
    id: "4",
    isOn: false,
  },
  {
    name: "Garage",
    id: "5",
    isOn: false,
  },
  {
    name: "Porch",
    id: "6",
    isOn: false,
  },
  {
    name: "Garden",
    id: "7",
    isOn: false,
  },
  {
    name: "Office",
    id: "8",
    isOn: false,
  },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  function handleToggle(lightID) {
    setLights(
      lights.map((light) =>
        light.id === lightID ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        //handleToggle={handleToggle}
        onToggle={handleToggle}
      />
    </Layout>
  );
}
