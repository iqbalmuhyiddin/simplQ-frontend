import { render } from '@testing-library/react';
import React from 'react';
import QueueInfo from '.';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: (arg) => arg,
}));
jest.mock('store/asyncActions', () => ({
  useGetQueueInfo: jest.fn(),
}));
jest.mock('store/selectedQueue', () => ({}));
jest.mock('store/queueInfo', () => ({
  selectQueueInfo: { maxQueueCapacity: 57, numberOfActiveTokens: 24, lastRemovedTokenNumber: 32 },
}));

describe('Queue info', () => {
  it('should render available queue slots', () => {
    const { getByTestId } = render(<QueueInfo />);
    expect(getByTestId('slots-value')).toHaveTextContent('33');
  });
});
