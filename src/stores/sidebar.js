import { defineStore } from 'pinia';
import { ref } from 'vue';
import { teamsArray } from '@/composable';

export const useSideBarStore = defineStore('sideBarStore', () => {
  // Общие переменные
  const team = ref('');
  const projectName = ref('');
  const startDate = ref('');
  const expireDate = ref('');
  const addNewMateName = ref('');
  const addNewMateProfile = ref('');
  const addNewMateEmail = ref('');
  const mutatedTeamsArray = ref([]);
  const chosen = ref([]);
  const toProjectTeamsArray = ref([]);

  // Внутренние переменные модуля sidebar.js
  const checkedItems = ref([]);
  const chosenMatesArr = ref([]);
  const addedNewMate = ref(false);
  const addedMateCounter = ref(0);
  const addedObject = ref({});

  // Общие функции
  mutatedTeamsArray.value = teamsArray;
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
    let choice = `выбрано ${addedNewMate ? checkedItems.value.length + addedMateCounter.value : checkedItems.value.length} из ${chosen.value.length}`;
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
    addedMateCounter.value = 0;
  };

  // Внутренние функции модуля sidebar.js
  const getChosenMates = () => {
    let arr = [];
    chosenMatesArr.value.forEach((el) => arr.push(...chosen.value.filter((elem) => elem.id == el)));
    if (Object.keys(addedObject.value).length !== 0) {
      arr.push(addedObject.value);
    }
    return arr;
  };

  const addNewMate = () => {
    let id = chosen.value.length + 1;
    let randomColor = chosen.value[Math.floor(Math.random() * chosen.value.length)].color;
    let name = addNewMateName.value;
    let profile = addNewMateProfile.value;
    let email = addNewMateEmail.value;
    let obj = Object.assign(
      {},
      email !== ''
        ? { id: id, color: randomColor, name: name, profile: profile, email: email }
        : { id: id, color: randomColor, name: name, profile: profile }
    );
    if (!Object.values(obj).includes('')) {
      addedObject.value = obj;
      chosen.value.push(addedObject.value);
      addedNewMate.value = true;
      addedMateCounter.value += 1;
    }
    addNewMateName.value = '';
    addNewMateProfile.value = '';
    addNewMateEmail.value = '';
  };

  return {
    team,
    projectName,
    startDate,
    expireDate,
    addNewMateName,
    addNewMateProfile,
    addNewMateEmail,
    mutatedTeamsArray,
    chosen,
    toProjectTeamsArray,
    checkedItems,
    getChosenTeam,
    checkItem,
    chosenToProject,
    addNewMate
  };
});
