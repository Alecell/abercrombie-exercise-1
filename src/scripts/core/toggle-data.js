export const toggleData = (function() {
  function switchVerb(el) {
    if (el.innerHTML === "show") el.innerHTML = "hide"
    else if (el.innerHTML === "hide") el.innerHTML = "show"
  }

  function init() {
    const $list = document.getElementById('list');
    const $button = document.getElementById('toggler');
    const $verb = document.getElementById('verb');

    $button.addEventListener('click', function() {
      $list.classList.toggle('show');
      switchVerb($verb);
    })
  }

  return {
    init,
  }
})();
