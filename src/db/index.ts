import { openDB } from "idb";

const dbName = 'app';
const tableName = 'notes'

export type NoteProps = {
  title: string,
  content: string,
  created_at: Date,
}

const notesDb = openDB(dbName, 1, {
  upgrade(db) {
    db.createObjectStore(tableName, {
      keyPath: 'id',
      autoIncrement: true,
    });
  }
});

export async function getAllNotes(): Promise<NoteProps[]> {
  return (await notesDb).getAll(tableName);
}

export async function setNote(val: NoteProps) {
  return (await notesDb).add(tableName, val)
}
