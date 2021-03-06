// Listen for Submit
document.getElementById('loan-form').addEventListener('submit', function(e) {
  // Hide results
  document.getElementById('results').style.display = 'none'
  
  
  // Show Loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 2000)

  

  e.preventDefault()
})

// Calculate Results
function calculateResults() {
  // UI Variables
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const yearsToRepay = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  // Calculation
  const principal = parseFloat(amount.value);
  const calcInterest = parseFloat(interest.value) / 100 / 12;
  const calcPayments = parseFloat(years.value) * 12;

  // Monthly Payments
  const x = Math.pow(1 + calcInterest, calcPayments);
  const monthly = (principal * x * calcInterest)/(x-1);

  if(isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calcPayments).toFixed(2);
    totalInterest.value = ((monthly * calcPayments) - principal).toFixed(2);

    // Show results
    document.getElementById('results').style.display = 'block'

    // Hide Loader
    document.getElementById('loading').style.display = 'none'


  } else {
    showError('Check Your Numbers')
  }
}

// Show Error Function

function showError(error) {

  // Hide results
  document.getElementById('results').style.display = 'none'

  // Hide Loader
  document.getElementById('loading').style.display = 'none'

  // Create a div
  const errorDiv = document.createElement('div')

  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add class
  errorDiv.className = 'alert alert-danger'

  // Create textNode and append to div
  errorDiv.appendChild(document.createTextNode(error))

  // Insert error above heading
  card.insertBefore(errorDiv, heading)

  // Clear error after 3 seconds
  setTimeout(clearError, 3000)
}

// Clear error
function clearError() {
  document.querySelector('.alert').remove()
}