<template>
  <div class="flex items-center justify-start">
    <div class="flex flex-shrink-0 -space-x-1">
      <VAvatar v-for="user in assegnees" :key="user.id" :user="user" />
    </div>
    <div>
      <VDropdown width="64">
        <VDropdownButton class="rounded-full p-0 h-8 w-8 flex items-center justify-center">
          <VIcon name="plus"></VIcon>
        </VDropdownButton>
        <VDropdownItems>
          <VDropdownItem
            v-for="user in users"
            :key="user.id"
            @click.prevent="() => addUser(user)"
            :class="{
              'font-semibold': assegnees.map((u: any) => u.id).includes(user.id),
            }"
            class="w-full block whitespace-nowrap truncate"
          >
            <span>{{ user.name }}</span>
          </VDropdownItem>
        </VDropdownItems>
      </VDropdown>
    </div>
  </div>
</template>

<script lang="ts">
//@ts-ignore
import {
  useField,
  VAvatar,
  VDropdown,
  VDropdownButton,
  VDropdownItems,
  VDropdownItem,
  VIcon,
} from "taskday";
import { defineComponent, computed } from "vue";

export default defineComponent({
  components: {
    VAvatar,
    VDropdown,
    VDropdownButton,
    VDropdownItems,
    VDropdownItem,
    VIcon
  },
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
  setup({ page }) {
    const { state, onChange } = useField();

    const users = computed(() => {
      return page.props.global.users ?? [];
    });

    const assegnees = computed(() => {
      return users.value.filter((user: { id: number }) => {
        return `${state.value}`.split(",").includes(`${user.id}`);
      });
    });

    const addUser = (user: any) => {
      if (state.value.split(",").includes(`${user.id}`)) {
        state.value = state.value
          .split(",")
          .filter((id: string) => id !== `${user.id}`)
          .join(",")
          .trim(",");
      } else {
        state.value = `${state.value},${user.id}`;
      }
      onChange();
    };

    return { addUser, users, assegnees };
  },
});
</script>
