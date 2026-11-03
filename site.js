(function () {
  var PHONE = '+18504006090';

  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  // Quote forms open a pre-filled text message to the business phone.
  document.querySelectorAll('form.quote').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = function (name) {
        var el = form.querySelector('[name="' + name + '"]');
        return el ? (el.value || '').trim() : '';
      };
      var lines = ['Hi Junk Get Gone! Quote request:'];
      if (v('name')) lines.push('Name: ' + v('name'));
      if (v('zip')) lines.push('ZIP: ' + v('zip'));
      lines.push('Job: ' + v('type'));
      lines.push('When: ' + v('when'));
      if (v('notes')) lines.push('Notes: ' + v('notes'));
      lines.push('(Photos attached)');
      // "?&body=" works on both iPhone and Android
      window.location.href = 'sms:' + PHONE + '?&body=' + encodeURIComponent(lines.join('\n'));
    });
  });

  // Close the mobile menu after tapping a link.
  document.querySelectorAll('.mnav-panel a').forEach(function (a) {
    a.addEventListener('click', function () {
      var d = a.closest('details');
      if (d) d.open = false;
    });
  });
})();
