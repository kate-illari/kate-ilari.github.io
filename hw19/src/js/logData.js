const storageData = JSON.parse(localStorage.getItem('data'));

const skills = _.uniq(
  _.flatten(storageData.map( (person)=> person.skills) )
  ).sort( (a,b) => a.localeCompare(b) );

console.log('1. SKILLS: ', skills);

const names = storageData
  .sort((personA, personB) => personA.friends.length - personB.friends.length )
  .reduce((prev, curr) => [ ...prev, curr.name ], 0);

console.log('2. NAMES: ', names);

const friends = _.uniq(
  _.flatten(storageData.reduce( (prev, curr) => [ ...prev, curr.friends ], 0)
  ).reduce( (prev, curr) => [ ...prev, curr.name ],0) );

console.log('3. FRIENDS: ', friends);