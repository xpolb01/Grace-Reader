import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ReviewListComponent from 'APP/app/review/reviewListComponent';
import SingleReviewComponent from 'APP/app/review/singleReviewComponent';
import { Link } from 'react-router';

describe('Review List Component', () => {

  const reviewsPassedDown = [
    { id: 0, rating: 1.0, content:'something something' },
    { id: 1, rating: 3.2, content: 'another review' },
    { id: 2, rating: 4.9, content: 'a different review'}
  ]

  let reviewList;
  beforeEach('Create component', () => {
    reviewList = shallow(<ReviewListComponent reviews={reviewsPassedDown} />)
  })

  it('should be a <div> with an expected background', () => {
    expect(reviewList.is('div')).to.be.true
  })

  it('should have reviews on its prop', () => {
    expect(reviewList.instance().props.reviews).to.equal(reviewsPassedDown)
  })

  it('should have 3 links and 3 singleReviewComponents', () => {
    expect(reviewList.find(Link)).to.have.length(3)
    expect(reviewList.find(SingleReviewComponent)).to.have.length(3)
  })
})
