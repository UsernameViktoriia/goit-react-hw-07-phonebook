import React, { useState } from 'react';
import { Form, Label, Input, Button } from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from '../../services/api';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const onChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'phone':
        setPhone(e.target.value);
        break;
      default:
        return;
    }
  };
  const onSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ phone, name }));
    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={onSubmit}>
      <Label className="input-group">
        <span>Name</span>
        <Input
          type="text"
          name="name"
          onChange={onChange}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label className="input-group">
        <span>Number</span>
        <Input
          type="tel"
          name="phone"
          onChange={onChange}
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
