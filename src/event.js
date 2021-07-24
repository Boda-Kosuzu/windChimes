const windchime = document.getElementById('windchime')
let isSwing = false

windchime.addEventListener('mouseenter', () => {
  if(isSwing) return

  isSwing = true

  const zetsu = document.getElementById('zetsu')
  zetsu.classList.toggle('animation')

  const audio = new Audio('./audio/001.mp3')
  audio.play()

  setTimeout(
    () => {
      zetsu.classList.toggle('animation')
      audio.pause();
      isSwing = false
    },
    2100
  );
})
