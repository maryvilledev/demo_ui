import React from 'react'
import ReactDOM from 'react-dom'
import CodeChunk from '../../src/components/CodeChunk'

import testRenderer from 'react-test-renderer'

const mockConcept = 'fat-arrow'
const mockLang = 'javascript'
const mockColor= '#FFFFFF'
const mockOnMouseEnter = (concept, lang) => `${concept}-${lang}`;

describe('<CodeChunk />', () => {
  it('renders correctly', () => {
    const tree = testRenderer.create(
      <CodeChunk
      concept={mockConcept}
      lang={mockLang}
      color={mockColor}
      onMouseEnter={mockOnMouseEnter} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
