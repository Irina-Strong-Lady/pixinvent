import { defineStore } from 'pinia';
import { ref } from 'vue';
import { teamsArray } from '@/composable';

export const useSideBarStore = defineStore('sideBarStore', () => {
  const team = ref('');
  const mutatedTeamsArray = ref([]);
  const checkedItems = ref([]);
  const chosen = ref([]);
  const toProjectTeamsArray = ref([]);

  mutatedTeamsArray.value = teamsArray;
  const getChosenTeam = (idx) => (chosen.value = mutatedTeamsArray.value[idx].mate);

  const checkItem = (color, checked) => {
    if (checked) {
      checkedItems.value.push(color);
    } else {
      checkedItems.value.splice(checkedItems.value.indexOf(color), 1);
    }
  };

  const chosentoProject = (team) => {
    let choice = checkedItems.value.length;
    let of = chosen.value.length;
    const obj = { team: team, choice: choice, of: of };
    toProjectTeamsArray.value.push(obj);
  };

  return {
    team,
    mutatedTeamsArray,
    chosen,
    checkedItems,
    toProjectTeamsArray,
    getChosenTeam,
    checkItem,
    chosentoProject
  };
});
