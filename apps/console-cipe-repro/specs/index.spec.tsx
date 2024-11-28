import React from 'react';
import { render } from '@testing-library/react';
import Page from '../src/app/page';

describe('Page', () => {
  it('should render successfullyy', () => {
    const { baseElement } = render(<Page />);
    expect(baseElement).toBeFalsy();
  });
});
