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

  function handleAllLightsOn() {
    setLights(lights.map((light) => ({ ...light, isOn: true })));
  }

  function handleAllLightsOff() {
    setLights(lights.map((light) => ({ ...light, isOn: false })));
  }

  const lightCount = lights.map((light) => {
    if (light.isOn === true) {
      return 1;
    } else {
      return 0;
    }
  });
  const lightSum = lightCount.reduce((a, b) => a + b);

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        onToggle={handleToggle}
        lightSum={lightSum}
        onAllLightsOn={handleAllLightsOn}
        onAllLightsOff={handleAllLightsOff}
      />
    </Layout>
  );
}

// const animalCounts = animals.map((animal) => animal.count);
//   const countSum = animalCounts.reduce((a, b) => a + b);
