function handleStepChange(event) {
  event.preventDefault();

  const button = event.currentTarget;
  const dataId = button.dataset.id;

  const targetStep = document.getElementById(dataId);
  const currentStep = document.querySelector('.choose-card');

  const servicesSec = button.closest('.servicesProgress');
  const industriesSec = button.closest('.industriesProgress');

  if (currentStep && targetStep) {
    currentStep.classList.remove('choose-card');

    servicesSec?.querySelectorAll('.services__btn').forEach(btn => {
      btn.classList.remove('choose-btn');
    });
    industriesSec?.querySelectorAll('.industries__btn').forEach(btn => {
      btn.classList.remove('choose-btn');
    });

    targetStep.classList.add('choose-card');
    button.classList.add('choose-btn');

    setTimeout(() => {
      currentStep.classList.remove('is-transition');
      targetStep.classList.add('is-transition');
    }, 10);
  }
}

document
  .querySelectorAll('.services__btn, .industries__btn')
  .forEach(button => {
    button.addEventListener('click', handleStepChange);
  });
