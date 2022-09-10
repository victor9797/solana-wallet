import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NftList from './NftList';

describe('<NftList />', () => {
  test('it should mount', () => {
    render(<NftList />);
    
    const nftList = screen.getByTestId('NftList');

    expect(nftList).toBeInTheDocument();
  });
});