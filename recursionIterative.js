// Counting Sheep

function sheepJump(numSheep) {
  for(let i = numSheep; i >= 0; i--) {
    if (i === 0) return console.log('All sheep jumped over the fence')
    console.log(`${i} Another sheep jumped over the fence`)
  }
}

sheepJump(5)