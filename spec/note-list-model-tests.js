function testThatNewNoteListIsCreated() {
  var notelist = new Notelist();
  assert.isTrue(notelist.notes.length === 0);
}
testThatNewNoteListIsCreated();

function addNewNoteToArray() {
  var notelist = new Notelist();
  notelist.create("hello");
  assert.isTrue(notelist.notes.length === 1);
}
addNewNoteToArray();

function returnsNotesInArray() {
  var notelist = new Notelist();
  notelist.create("hello");
  notelist.create("goodbye");
  assert.isTrue(notelist.all().length === 2);
}
returnsNotesInArray();
