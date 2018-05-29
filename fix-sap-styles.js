(function () {

  var all = document.getElementsByTagName('*');
  remove_style(all);

  var canvas = document.getElementsByClassName('canvas')[0];
  if (!canvas) {
    canvas = document.getElementsByClassName('sapCpBody')[0];
  }

  var pageTitle = document.createElement('div');
  pageTitle.classList.add('m-page-title');
  pageTitle.innerHTML = '<h1 class="m-page-title__heading">AXA Newsletter</h1>';
  canvas.insertBefore(pageTitle, canvas.firstChild);

  var topImage = document.createElement('div');
  topImage.classList.add('hero');
  canvas.insertBefore(topImage, canvas.firstChild);

  document.querySelectorAll('form')
    .forEach(
      function (form) {
        form.classList.add('o-container');
      }
    );

  document.querySelectorAll('button')
    .forEach(
      function (button) {
        button.parentNode.classList.add('button-fix');
        button.classList.add('m-button');
      }
    );

  document.querySelectorAll('input[type="text"]')
    .forEach(
      function (input) {
        input.parentNode.classList.add('a-input');
        input.classList.add('a-input__input');
      }
    );

  document.querySelectorAll('label')
    .forEach(
      function (label) {
        label.classList.add('m-form-group__label');
        label.parentNode.parentNode.classList.add('m-form-group');

        var forAttr = label.getAttribute('for');
        var input = label.parentNode.parentNode.querySelector('input');
        var select = label.parentNode.parentNode.querySelector('select');
        var ele = input || select;

        if (ele) {
          ele.setAttribute('id', forAttr);
        }
      }
    );


  document.querySelectorAll('input[type="checkbox"]')
    .forEach(
      function (checkbox) {
        checkbox.parentNode.classList.add('a-checkbox');
        checkbox.parentNode.parentNode.classList.add('checkbox-fix');

        var checkboxIcon = document.createElement('span');
        checkboxIcon.classList.add('a-checkbox__icon');
        if (checkbox.checked) {
          checkboxIcon.classList.add('a-checkbox__icon--active');
        }

        var label = document.createElement('label');
        label.classList.add('a-checkbox__wrapper');
        label.setAttribute('for', checkbox.getAttribute('id'));
        label.appendChild(checkboxIcon);

        checkbox.parentNode.appendChild(label);
        checkbox.classList.add('a-checkbox__input');

        checkbox.addEventListener('change', function (event) {
          console.log('event.target.checked', event.target.checked);
          console.log('checkboxIcon', checkboxIcon);
          if (event.target.checked) {
            checkboxIcon.classList.add('a-checkbox__icon--active');
            checkbox.parentNode.classList.add('a-checkbox--checked');
          } else {
            checkboxIcon.classList.remove('a-checkbox__icon--active');
            event.target.parentNode.classList.remove('a-checkbox--checked');
          }
        });
      }
    );

  document.querySelectorAll('select')
    .forEach(
      function (select) {
        select.classList.add('m-dropdown__select');
        select.classList.add('m-dropdown__select--sm');
        select.parentNode.classList.add('m-dropdown__select-wrap');
        select.parentNode.classList.add('m-dropdown__select-wrap--sm');

        var selectIcon = document.createElement('div');
        selectIcon.classList.add('m-dropdown__select-icon');
        selectIcon.classList.add('m-dropdown__select-icon--sm');
        selectIcon.innerHTML = '<svg class="m-dropdown__icon" viewBox="0 0 32 32" id="src--assets--icons--angle-bracket-down" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><path fill="currentColor" d="M16 28.067c-.533 0-1-.2-1.4-.6l-14-14c-1.8-1.8 1-4.667 2.8-2.8L16 23.2l12.6-12.533c1.8-1.8 4.667 1 2.8 2.8l-14 14c-.333.4-.867.6-1.4.6z"></path></svg>';

        select.parentNode.appendChild(selectIcon);
      }
    );

  function remove_style(all) {
    var i = all.length;
    var j, is_hidden;

    // Presentational attributes.
    var attr = [
      'align',
      'background',
      'bgcolor',
      'border',
      'cellpadding',
      'cellspacing',
      'color',
      'face',
      'height',
      'hspace',
      'marginheight',
      'marginwidth',
      'noshade',
      'nowrap',
      'valign',
      'vspace',
      'width',
      'vlink',
      'alink',
      'text',
      'link',
      'frame',
      'frameborder',
      'clear',
      'scrolling',
      'style',
    ];

    var attr_len = attr.length;

    while (i--) {
      is_hidden = (all[i].style.display === 'none');

      j = attr_len;

      while (j--) {
        all[i].removeAttribute(attr[j]);
      }

      // Re-hide display:none elements,
      // so they can be toggled via JS.
      if (is_hidden) {
        all[i].style.display = 'none';
        is_hidden = false;
      }
    }
  }
})();