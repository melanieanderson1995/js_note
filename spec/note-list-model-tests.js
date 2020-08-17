function testThatNewNoteListIsCreated() {
  var notelist = new Notelist();
  assert.isTrue(notelist.notes.length == 0);
}
testThatNewNoteListIsCreated();

function addNewNoteToArray() {
  var notelist = new Notelist();
  notelist.create("hello");
  assert.isTrue(notelist.notes.length == 1);
}

addNewNoteToArray();
