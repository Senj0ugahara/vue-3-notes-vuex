import {createStore} from 'vuex';
import { transformLocalNotes, emptyLocalNotes, updateLocalNotes } from '@/localStorage';


export const store = createStore({
  state: {
    notes: [],
  },
  mutations: {
    submitNote(state, notes) {
      state.notes.push(notes);
    },
    removeNote(state, index) {
      state.notes.splice(index, 1);
    },
    searchNotes(state, notes) {
      state.notes = notes;
    }
  },
  actions: {
    submitNote({ commit }, note) {
      const notes = {
        title: note.title,
        tags: note.tags
      };
      commit('submitNote', notes)
    },
    removeNote({ commit }, index) {
      commit('removeNote', index);
    },
    searchNotes({ commit }) {
      if (emptyLocalNotes) {
        const defaultNotes = [
          {
            title: 'Task 1',
            tags: [
              {
                title: 'home'
              }
            ]
          },
          {
            title: 'Task 2',
            tags: [
              {
                title: 'home',
              },
              {
                title: 'work'
              }
            ]
          },
          {
            title: 'Task 3',
            tags: []
          },
        ];
        commit('searchNotes', defaultNotes);
      } else {
        commit('searchNotes', transformLocalNotes);
      }
    }
  },
  getters: {
    getNotes(state) {
      updateLocalNotes(state.notes);
      return state.notes;
    }
  }
})