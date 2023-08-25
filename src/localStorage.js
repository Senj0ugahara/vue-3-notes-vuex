const localNotes = localStorage.getItem('notes');

export const transformLocalNotes = JSON.parse(localNotes);

export const emptyLocalNotes = transformLocalNotes === null || transformLocalNotes.length === 0;

export function updateLocalNotes(updateList) {
  localStorage.setItem('notes', JSON.stringify(updateList));
}