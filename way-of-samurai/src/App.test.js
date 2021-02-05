import React from 'react';
import App from "./App";
import { unmountComponentAtNode } from "react-dom";
import { render } from '@testing-library/react';

let container = null;
beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe.skip ("App(Root) component", () => {
	it("sholud render with h1 inside", () => {
		const {findByText} = render(<App />);
		findByText("Hello Testin",{exact: false})
	})
})