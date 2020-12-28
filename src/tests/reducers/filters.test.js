import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
  const state = filterReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});

test('should set sort by to amount', () => {
  const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount',
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filterReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const state = filterReducer(undefined, {
    type: 'SET_TEXT_FILTER',
    text: 'rent',
  });
  expect(state.text).toBe('rent');
});

test('should set startDate filter', () => {
  const state = filterReducer(undefined, {
    type: 'SET_START_DATE',
    startDate: 1000,
  });
  expect(state.startDate).toBe(1000);
});

test('should set endDate filter', () => {
  const state = filterReducer(undefined, {
    type: 'SET_END_DATE',
    endDate: 1000,
  });
  expect(state.endDate).toBe(1000);
});
