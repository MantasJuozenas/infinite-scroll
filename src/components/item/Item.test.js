import { fireEvent, render, screen } from '@testing-library/react';
import Item from './Item';
import { newTestData } from '../../data/data';
import '@testing-library/jest-dom/extend-expect';

describe('Item component', () => {
  it('If Item is not favourited than button text should be Favourite', () => {
    render(<Item data={newTestData.photos[0]} favourited={[]} onclick={() => {}} />);
    const button = screen.getByTestId('favouriteButton');

    expect(button.textContent).toBe('Favourite');
  });

  it('If Item is favourited than button text should be Favourited', () => {
    render(<Item data={newTestData.photos[0]} favourited={[15286]} onclick={() => {}} />);
    const button = screen.getByTestId('favouriteButton');

    fireEvent.click(button);

    expect(button.textContent).toEqual('Favourited');
  });

  it('If on hover picture name, author and favourite button are not hidden', async () => {
    render(<Item data={newTestData.photos[0]} favourited={[]} onclick={() => {}} />);
    const item = screen.getByTestId('item');
    const itemDiv = screen.getByTestId('itemDiv');

    fireEvent.mouseEnter(item, () => {
      expect(itemDiv).toBeVisible();
    });
  });

  it('If not on hover picture name, author and favourite button are hidden', () => {
    render(<Item data={newTestData.photos[0]} favourited={[]} onclick={() => {}} />);
    const item = screen.getByTestId('item');
    const itemDiv = screen.getByTestId('itemDiv');

    fireEvent.mouseLeave(item, () => {
      expect(itemDiv).not.toBeVisible();
    });
  });
});
