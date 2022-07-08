import UsersField from './components/UsersField.vue';

document.addEventListener('taskday:init', () => {
  Taskday.register('users', {
    field: UsersField
  });
})

