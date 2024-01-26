import ItemList from './ItemList';
import { newTestData } from '../../data/data';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('If presented with array of 12 objects, it displays 12 items', () => {
  render(<ItemList data={newTestData} />);
  const items = screen.getAllByTestId('item');

  expect(items.length).toEqual(12);
});
