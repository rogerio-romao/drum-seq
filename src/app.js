import * as Tone from 'tone'

//clear the console
console.clear()

//run button
const run = document.querySelector('#run')

const sampler = new Tone.Sampler({
  urls: {
    A1: 'A1.mp3',
    A2: 'A2.mp3'
  },
  baseUrl: 'https://tonejs.github.io/audio/casio/',
  onload: () => {
    sampler.triggerAttackRelease(['C1', 'E1', 'G1', 'B1'], 0.5)
  }
}).toDestination()

run.addEventListener('click', () => Tone.start())
