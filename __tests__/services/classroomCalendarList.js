import {resolveCalendarList} from '../../src/services/classroomCalendarList';

describe('Testing Classroom Calendars List services', () => {
  const classroom = [{dtclass: '2020-03-01T00:00:00Z'}];
  test('Should return objects of dates', () => {
    const mockCalendarResolver = jest
      .fn()
      .mockImplementation(resolveCalendarList);
    const date = mockCalendarResolver(classroom);

    expect(date).toEqual({
      '2020-03-01': {selected: true, selectedColor: '#E46270'},
    });
    expect(mockCalendarResolver).toBeCalledTimes(1);
  });
});
