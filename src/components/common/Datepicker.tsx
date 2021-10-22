import React from 'react';
import { Controller, Control } from 'react-hook-form';
import Flatpickr from 'react-flatpickr';
import { useCurrentTask } from '../../hooks/taskHooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Datepicker = ({ control }: { control: Control<any, any> }): JSX.Element => {
  const currentTask = useCurrentTask();
  const options = {
    minDate: 'today',
    static: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    monthSelectorType: 'static' as any,
    dateFormat: 'M j, Y',
    defaultDate: new Date() as Date,
    prevArrow:
      '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
    nextArrow:
      '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
  };

  return (
    <Controller
      defaultValue={currentTask && currentTask ? currentTask.deadline : undefined}
      name="date"
      control={control}
      rules={{ required: true }}
      render={({ field }) => {
        return (
          <div className="fixed text-gray-500 hover:text-yellow-500">
            <Flatpickr
              aria-labelledby="deadline"
              className="form-input pl-9  hover:text-yellow-600 font-medium focus:border-gray-300 w-60"
              options={options}
              onChange={field.onChange}
              value={field.value}
            />
            <div className="absolute inset-0 right-auto flex items-center pointer-events-none ">
              <FontAwesomeIcon
                className="w-4 h-4 fill-current ml-3"
                icon={faCalendarDay}
              />
            </div>
          </div>
        );
      }}
    />
  );
};

export default Datepicker;
