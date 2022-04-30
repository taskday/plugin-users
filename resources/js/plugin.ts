import UsersField from './components/UsersField.vue';
import UsersFilter from './components/UsersFilter.vue';

document.addEventListener('taskday:init', () => {
  Taskday.register('users', {
    field: UsersField,
    filter: UsersFilter
  });
})

