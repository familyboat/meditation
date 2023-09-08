import { openDB } from "idb";

const dbName = "app-meditation";
const notesTableName = "notes";

const meditationdb = openDB(dbName, 1, {
  upgrade(db) {
    db.createObjectStore(notesTableName, {
      keyPath: "id",
      autoIncrement: true,
    });
  },
});

export type NoteVersionResourceProps = {
  title: string;
  content: string;
  modified_at: Date;
};

export type NoteResourceProps = {
  id: number;
  title: string;
  content: string;
  created_at: Date;
  modified_at: Date;
  versions: NoteVersionResourceProps[];
};

// create a note
export async function createNoteInDb(note: Omit<NoteResourceProps, "id">) {
  return (await meditationdb).add(notesTableName, note);
}

// delete a note
export async function deleteNoteInDb(noteId: number) {
  (await meditationdb).delete(notesTableName, noteId);
}

// modify a note
export async function modifyNoteInDb(note: NoteResourceProps) {
  return (await meditationdb).put(notesTableName, note);
}

// get a note
export async function getNoteInDb(noteId: number): Promise<NoteResourceProps> {
  return (await meditationdb).get(notesTableName, noteId);
}

// get all note
export async function getNotesInDb(): Promise<NoteResourceProps[]> {
  return (await meditationdb).getAll(notesTableName);
}
