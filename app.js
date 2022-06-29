const memeForm = document.querySelector('#memeForm');
const memesContainer = document.querySelector('#memes');
memeForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const imgURLInput = memeForm.elements.imageURL;
    const topTextInput = memeForm.elements.topText;
    const bottomTextInput = memeForm.elements.bottomText;
    addMeme(topTextInput.value, bottomTextInput.value, imgURLInput.value);
    imgURLInput.value = '';
    topTextInput.value = '';
    bottomTextInput.value = '';
});

const addMeme = (topText, bottomText, imageURL) => {
    const newMeme = document.createElement('div');
    newMeme.className = 'meme container center';
    const top = document.createElement('div');
    top.className = 'top';
    const bottom = document.createElement('div');
    bottom.className = 'bottom';
    const memeImg = document.createElement('img');
    memeImg.src = `${imageURL}`;
    memeImg.alt = `Image not displaying. Please remove and try again.`;
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Remove';
    deleteButton.className = 'btn btn-outline-dark btn-sm';
    deleteButton.id = 'delete-btn'
    top.append(topText)
    bottom.append(bottomText)
    newMeme.append(memeImg);
    newMeme.append(top);
    newMeme.append(bottom);
    newMeme.append(deleteButton);
    memesContainer.append(newMeme);
}


memesContainer.addEventListener('click',function(e){
  e.preventDefault();
  const isButton = e.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }
  let xButton = e.target;
  let totalMeme = xButton.parentElement;
  totalMeme.remove();
})