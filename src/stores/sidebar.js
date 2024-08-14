import { defineStore } from 'pinia';
import { ref } from 'vue';
import { teamsArray, colors } from '@/composable';

export const useSideBarStore = defineStore('sideBarStore', () => {
  // Общие переменные
  const team = ref('');
  const projectName = ref('');
  const startDate = ref('');
  const expireDate = ref('');
  const addNewMateName = ref('');
  const addNewMateProfile = ref('');
  const addNewMateEmail = ref('');
  const randomColor = ref('#9C9BE2');
  const mutatedTeamsArray = ref([]);
  const chosen = ref([]);
  const toProjectTeamsArray = ref([]);
  const checkedItems = ref([]);

  // Внутренние переменные модуля sidebar.js
  const chosenMatesArr = ref([]);
  const addedNewMate = ref(false);
  const addedObject = ref({});

  // Общие функции
  mutatedTeamsArray.value = teamsArray;
  randomColor.value = colors[Math.floor(Math.random() * colors.length)].color;

  const getChosenTeam = (idx) => (chosen.value = mutatedTeamsArray.value[idx].mate);

  const checkItem = (id, color, checked) => {
    if (checked) {
      chosenMatesArr.value.push(id);
      checkedItems.value.push(color);
    } else {
      chosenMatesArr.value.splice(chosenMatesArr.value.indexOf(id), 1);
      checkedItems.value.splice(checkedItems.value.indexOf(color), 1);
    }
  };

  const chosenToProject = () => {
    addNewMate();
    let choice = `выбрано ${addedNewMate ? checkedItems.value.length : checkedItems.value.length} из ${chosen.value.length}`;
    let chosenTeam = team.value;
    let start = startDate.value;
    let expire = expireDate.value;
    let chosenMates = getChosenMates();
    let project = projectName.value;
    let obj = Object.assign(
      {},
      {
        project: project,
        start: start,
        expire: expire,
        team: chosenTeam,
        color: '#96A5CD',
        choice: choice,
        mate: chosenMates
      }
    );
    toProjectTeamsArray.value.push(obj);
    toProjectTeamsArray.value = toProjectTeamsArray.value.map((item, index) => ({
      ...item,
      id: index + 1
    }));
    checkedItems.value.length = 0;
    addedNewMate.value = false;
  };

  // Внутренние функции модуля sidebar.js
  const getChosenMates = () => {
    let arr = chosen.value.filter((el) => chosenMatesArr.value.includes(el.id));
    chosenMatesArr.value.length = 0;
    return arr;
  };

  const addNewMate = () => {
    let id = chosen.value.length + 1;
    let name = addNewMateName.value;
    let profile = addNewMateProfile.value;
    let email = addNewMateEmail.value;
    let obj = Object.assign(
      {},
      email !== ''
        ? { id: id, color: randomColor.value, name: name, profile: profile, email: email }
        : { id: id, color: randomColor.value, name: name, profile: profile }
    );
    if (!Object.values(obj).includes('') && Object.keys(obj).length !== 0) {
      addedObject.value = obj;
      chosen.value.push(addedObject.value);
      addedNewMate.value = true;
    }
    addNewMateName.value = '';
    addNewMateProfile.value = '';
    addNewMateEmail.value = '';
  };

  const resetOnStart = () => {
    projectName.value = '';
    startDate.value = '';
    expireDate.value = '';
  };

  return {
    team,
    projectName,
    startDate,
    expireDate,
    addNewMateName,
    addNewMateProfile,
    addNewMateEmail,
    randomColor,
    mutatedTeamsArray,
    chosen,
    toProjectTeamsArray,
    checkedItems,
    getChosenTeam,
    checkItem,
    chosenToProject,
    addNewMate,
    resetOnStart
  };
});
