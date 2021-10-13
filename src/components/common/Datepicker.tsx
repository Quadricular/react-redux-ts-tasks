import React from 'react';
import { Controller, Control } from 'react-hook-form';
import Flatpickr from 'react-flatpickr';
import { useCurrentTask } from '../../hooks/taskHooks';

const Datepicker = ({ control }: { control: Control<any, any> }): JSX.Element => {
  const currentTask = useCurrentTask();

  return (
    <Controller
      defaultValue={currentTask && currentTask ? currentTask.deadline : undefined}
      name="date"
      control={control}
      rules={{ required: true }}
      render={({ field }) => {
        console.log('[field]', field.value);
        return (
          <Flatpickr
            options={{ dateFormat: 'd-m-Y' }}
            onChange={field.onChange}
            value={field.value}
            render={({ defaultValue }, ref) => {
              return <input defaultValue={defaultValue} ref={ref} />;
            }}
          />
        );
      }}
    />
  );
};

export default Datepicker;
