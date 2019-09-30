import React from "react";
import { MarkerItem, MarkerList, Layout } from "../src/js/components";
import renderer from "react-test-renderer";
import store from "../src/js/store";
import { Provider } from "react-redux";

test("Test MarkerItem component", () => {
  const component = renderer.create(
    <Provider store={store}>
      <MarkerItem
        marker={{ id: 1, name: "Berlin", latitude: 50.393, longitude: 12.272 }}
      ></MarkerItem>
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Test MarkerList component", () => {
  const markers = [
    { id: 1, name: "Munich", latitude: 55.393, longitude: 10.272 },
    { id: 3, name: "Berlin", latitude: 53.393, longitude: 18.342 }
  ];
  const component = renderer.create(
    <Provider store={store}>
      <MarkerList markers={markers}></MarkerList>
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Test Layout component", () => {
  const component = renderer.create(
    <Provider store={store}>
      <Layout></Layout>
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
