import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nft from './Nft';

describe('<Nft />', () => {
  test('it should mount', () => {
    render(<Nft />);
    
    const nft = screen.getByTestId('Nft');

    expect(nft).toBeInTheDocument();
  });
});