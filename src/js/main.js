import '../scss/main.scss';
import { toggleModal } from './modal';

document.addEventListener('DOMContentLoaded', () => {
  toggleModal('burger-modal', '.burger-btn', '.close-burger-btn');
  toggleModal('form-modal', '.hero-btn', '.close-btn');
});
