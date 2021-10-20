import React from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { FormTypes } from '../../hooks/taskHooks';
import { Task, TaskErrors } from '../../models/task';
import Datepicker from './Datepicker';

import { useDispatch } from 'react-redux';
import { hideModal } from '../../store/actions';

const TaskForm = ({
  add,
  submitting,
  register,
  errors,
  onSubmit,
  handleSubmit,
  control,
}: FormTypes<Task, TaskErrors>): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="px-5 py-4">
        <div className="space-y-3">
          <div>
            {/* Start */}
            <div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  aria-labelledby="name"
                  {...register('name', { required: 'Name is required.' })}
                  id="name"
                  className={
                    errors?.name
                      ? 'form-input w-full border-red-300'
                      : 'form-input w-full'
                  }
                  type="text"
                />
              </div>
              <div className="text-xs mt-1 text-red-500">
                <ErrorMessage errors={errors} name="name" />
              </div>
            </div>
            {/* End */}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Date
            </label>
            <Datepicker control={control} />
          </div>

          <div className="pt-10">
            <label className="block text-sm font-medium mb-1" htmlFor="feedback">
              Description
            </label>
            <textarea
              id="feedback"
              className="form-textarea w-full px-2 py-1"
              rows={4}
              {...register('description')}
            ></textarea>
          </div>
        </div>
      </div>
      {/* Modal footer */}
      <div className="px-5 py-4 ">
        <div className="flex flex-wrap justify-end space-x-2">
          <button
            className="btn-sm border-gray-200 hover:border-gray-300 text-gray-600"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(hideModal());
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn-sm bg-black hover:bg-yellow-400 text-white hover:text-black"
          >
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
