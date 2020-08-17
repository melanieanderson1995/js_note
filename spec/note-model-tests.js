function testNoteHasCorrectString() {
  var note = new Note("Javascript");
  assert.isTrue(note.text === "Javascript");
};
testNoteHasCorrectString();

function testNoteReturnsNote () {
  var note = new Note("Javascript");
  assert.isTrue(note.returnNote() === "Javascript")
}
testNoteReturnsNote();
