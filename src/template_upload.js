import feather from 'feather-icons';

const template_Upload = ()=> {
  const container = document.querySelector('#upload');

  const div = document.createElement('div');
  const title = document.createElement('h2');
  const form = document.createElement('form');
  const input = document.createElement('input');
  const label = document.createElement('label');
  const img = document.createElement('img');
  const button = document.createElement('button');
  const iconPlus = document.createElement('i');
  const iconUpload = document.createElement('i');

  title.textContent = 'Subir tu foto';

  input.id = 'file';
  input.type = 'file';
  input.name = 'file';

  iconPlus.setAttribute('data-feather', 'plus-square');
  iconPlus.setAttribute('stroke', '#1f1f1f');
  iconPlus.setAttribute('fill', '#FFBD12');

  iconUpload.setAttribute('data-feather', 'upload');
  iconUpload.setAttribute('stroke', '#1f1f1f');
  iconUpload.setAttribute('fill', '#FFBD12');

  label.htmlFor = 'file';
  label.className = 'input';
  label.textContent = 'Seleccionar Archivo';
  label.append(iconPlus);

  img.className = 'imgPreview';

  button.className = 'uploadButton';
  button.type = 'button';
  button.textContent = 'Subir Foto';
  button.append(iconUpload)

  form.id = 'uploadingForm';
  form.append(input, label, img, button);

  div.setAttribute('class', 'image uploading');
  div.append(title, form);

  container.append(div);
  feather.replace();
}

export default template_Upload;