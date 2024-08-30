function handleStepChange(event) {
  event.preventDefault();

  const button = event.currentTarget;
  const dataId = button.dataset.id;

  const targetStep = document.getElementById(dataId);
  const currentStep = document.querySelector('.selected-item');

  if (currentStep && targetStep) {
    currentStep.classList.remove('selected-item');

    document?.querySelectorAll('.letter-btn').forEach(btn => {
      btn.classList.remove('selected-btn');
    });

    targetStep.classList.add('selected-item');
    button.classList.add('selected-btn');

    setTimeout(() => {
      currentStep.classList.remove('is-transition');
      targetStep.classList.add('is-transition');
    }, 10);
  }
}

document?.querySelectorAll('.letter-btn').forEach(button => {
  button.addEventListener('click', handleStepChange);
});
