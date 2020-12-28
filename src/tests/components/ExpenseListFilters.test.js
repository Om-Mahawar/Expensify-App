import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../Components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';

let setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();

  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('should render expense list filters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render expense list filters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters,
  });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change ', () => {
  const textFilter = {
    target: {
      value: 'bill',
    },
  };
  wrapper.find('input').simulate('change', textFilter);
  expect(setTextFilter).toHaveBeenLastCalledWith('bill');
});

test('should sort By Date', () => {
  wrapper.setProps({
    filters: altFilters,
  });
  const sortFilter = {
    target: {
      value: 'date',
    },
  };
  wrapper.find('select').simulate('change', sortFilter);
  expect(sortByDate).toHaveBeenCalled();
});

test('should sort By Amount', () => {
  const sortFilter = {
    target: {
      value: 'amount',
    },
  };
  wrapper.find('select').simulate('change', sortFilter);
  expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
  const dateFilter = {
    startDate: moment(0).add(4, 'years'),
    endDate: moment(0).add(8, 'years'),
  };

  wrapper.find(DateRangePicker).prop('onDatesChange')(dateFilter);
  expect(setStartDate).toHaveBeenLastCalledWith(dateFilter.startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(dateFilter.endDate);
});

test('should handle date focus change', () => {
  const calenderFocused = 'endDate';

  wrapper.find(DateRangePicker).prop('onFocusChange')(calenderFocused);
  expect(wrapper.state('calenderFocused')).toBe(calenderFocused);
});
