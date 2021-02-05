
import React from 'react';
import Status from './Status';
import { unmountComponentAtNode } from "react-dom";
import { fireEvent, render } from '@testing-library/react';

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

describe("Status", () => {
	it("Displays 'Double-click here to add status' if it is own profile and status is empty", async () => {
		const updateStatus = jest.fn();
		const {findByText,findByTestId} = render(
		<Status status='' ownProfile={true} updateStatus={updateStatus} />
		)
		await findByTestId('ownStatusText');
		findByText('Double-click here',{exact:false});
	})
	it("Displays 'Some status' if it is own profile and status is 'Some status'", async () => {
		const updateStatus = jest.fn();
		const {findByText,findByTestId} = render(
		<Status status='Some status' ownProfile={true} updateStatus={updateStatus} />
		)
		await findByTestId('ownStatusText');
		findByText('some stat',{exact:false});
	})
	it("Displays 'Some status' if it is other person profile and status is 'Some status'", async () => {
		const updateStatus = jest.fn();
		const {findByText,findByTestId} = render(
			<Status status='Some status' ownProfile={false} updateStatus={updateStatus} />
			)
			await findByTestId('statusText');
			findByText('some stat',{exact:false});
		})
		it("Displays 'Some status' if it is own profile and status was double-clicked", async () => {
			const updateStatus = jest.fn();
			const {findByText,findByTestId} = render(
			<Status status='Some status' ownProfile={true} updateStatus={updateStatus} />
			)
			const status = await findByTestId('ownStatusText');
			await fireEvent.dblClick(status);
			await	findByTestId('statusChangeInput'),
			findByText('some stat',{exact:false});
		})
		it("Calls updateStatus on button click", async () => {
			const updateStatus = jest.fn();
			const {findByTestId,container} = render(
			<Status status='Some status' ownProfile={true} updateStatus={updateStatus} />
			)
			const status = await findByTestId('ownStatusText');
			await fireEvent.dblClick(status);
			const button = await	findByTestId('saveStatusButton');
			fireEvent.click(button);
			expect(updateStatus).toBeCalled;
			findByTestId('ownStatusText');
		})
}) 