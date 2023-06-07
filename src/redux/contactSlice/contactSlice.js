import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  // Имя слайса
  name: 'contacts',
  // Начальное состояние редюсера слайса
  initialState,
  // Объект редюсеров
  reducers: {
    addContact(state, action) {
      // action -> { type: "contact/addContact", payload } - {name: "Olek", number: "+12354", id: "1337"}
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact(state, action) {
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
    },
    setFilter(state, action) {
        state.filter = action.payload
    },
  },
});

// Генераторы экшенов(instructions)
export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
// Редюсер слайса
export const contactsReducer = contactsSlice.reducer;

/* 
 Редьюсер - это функцыия, которая принимает стейт и екшн(объект инструкцию) и изменяет состояние. 
    addContact(state, action) {
        state.contacts = [...state.contacts, action.payload]
    }
 Экшин - объект instruction, который имеет два поля, тип и пейлоад, при этом, тип обязательный
    { type: "contacts/addContacts" , payload }

*/
