function math() {
  const sum = parseFloat(document.getElementById("Sum").value);
  const day = parseFloat(document.getElementById("Days").value);

  let procent;

  if (sum <= 50) {
    procent = 1.7;
  } else if (sum <= 200) {
    procent = 1.7;
  } else if (sum <= 500) {
    procent = 1.5;
  } else if (sum <= 1000) {
    procent = 1.4;
  } else if (sum <= 2000) {
    procent = 1.1;
  } else if (sum <= 3000) {
    procent = 0.9;
  } else {
    procent = 0.9;
  }

  const all_procent = (sum / 100) * procent * day;
  const all_sum = all_procent + sum;

  document.getElementById("Result").textContent = "Сумма процентов: " + all_procent.toFixed(2);
  document.getElementById("Vykup").textContent = "Сумма выкупа: " + all_sum.toFixed(2);
}

document.addEventListener('DOMContentLoaded', function() {
    const calendarIcon = document.getElementById('calendarIcon');
    const dateInput = document.getElementById('Days');
    const confirmButton = document.createElement('button');
    confirmButton.id = 'confirmButton';
    confirmButton.textContent = 'Подтвердить';
    confirmButton.style.display = 'block';
    confirmButton.style.margin = '20px auto';
    confirmButton.style.padding = '10px 20px';
    confirmButton.style.backgroundColor = '#ffd700';
    confirmButton.style.color = '#1c1c1e';
    confirmButton.style.border = 'none';
    confirmButton.style.borderRadius = '5px';
    confirmButton.style.fontSize = '1.2rem';
    confirmButton.style.cursor = 'pointer';
    confirmButton.style.transition = 'background-color 0.3s ease';

    confirmButton.addEventListener('mouseover', function() {
        confirmButton.style.backgroundColor = '#e5c100';
    });

    confirmButton.addEventListener('mouseout', function() {
        confirmButton.style.backgroundColor = '#ffd700';
    });

    confirmButton.addEventListener('click', function(event) {
        event.preventDefault();
        math();
    });

    document.querySelector('main').appendChild(confirmButton);

    const datepicker = document.createElement('input');
    datepicker.type = 'date';
    datepicker.style.display = 'none';
    document.body.appendChild(datepicker);

    function updateDateInput(selectedDate) {
        const today = new Date();
        const diffTime = Math.abs(selectedDate - today);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        dateInput.value = diffDays + 1;
    }

    calendarIcon.addEventListener('click', function() {
        datepicker.showPicker();
        datepicker.addEventListener('change', function() {
            const selectedDate = new Date(datepicker.value);
            updateDateInput(selectedDate);
        });
    });

    dateInput.addEventListener('input', function() {
        const value = parseInt(dateInput.value, 10);
        if (!isNaN(value) && value >= 0) {
            dateInput.value = value;
        }
    });

    document.getElementById('calculatorForm').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            math();
        }
    });
});
