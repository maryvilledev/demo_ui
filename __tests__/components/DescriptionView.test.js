import React from 'react'
import ReactDOM from 'react-dom'
import DescriptionView from '../../src/components/DescriptionView'

import testRenderer from 'react-test-renderer'

const mockDescription = {
  concept_name: "on-the-cob",
  description: "The best kind of corn.",
  syntax: "shuck+boil",
}
const mockActive = true;

describe('<DescriptionView />', () => {
  it('renders correctly', () => {
    const tree = testRenderer.create(
      <DescriptionView
        description={mockDescription}
        active={mockActive}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
