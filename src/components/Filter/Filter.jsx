import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice/filterSlice';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();
  return (
    <div>
      <Label className="input-group">
        <span>Find contacts by name</span>
        <Input
          type="text"
          name="filter"
          onChange={e => {
            dispatch(setFilter(e.target.value));
          }}
          value={filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
    </div>
  );
};
