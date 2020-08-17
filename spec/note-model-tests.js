var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  }
};

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
