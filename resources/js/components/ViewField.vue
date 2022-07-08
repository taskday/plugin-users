<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";

let props = defineProps<{ 
  value: string | null 
  page: any,
}>();

const assignees = computed(() => {
  return props.page.props.global.users.filter((user: { id: number }) => {
    return `${props.value}`.split(",").includes(`${user.id}`);
  });
});

</script>

<template>
  <span>{{ assignees.map((a: User) => a.name).join(', ') }} </span>
</template>