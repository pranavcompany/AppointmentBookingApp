import React from 'react';
import {render} from '@testing-library/react-native';
import Button from './Button';

describe('Button ', () => {
  it('Should render button icon', () => {
    const tree = render(
      <Button
        testID="back-button"
        icon
        iconColor="#000"
        iconName="angle-left"
      />,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Should render button label', () => {
    const tree = render(
      <Button
        backgroundColor="#33adff"
        testID="button-2"
        margin={10}
        label="demo"
      />,
    );
    expect(tree).toMatchSnapshot();
  });
});
