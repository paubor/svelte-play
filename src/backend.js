let polls = [];

function storePoll(poll){
  polls = [poll, ...polls];
}

module.exports = {
  storePoll
};