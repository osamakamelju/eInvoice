$(document).ready(function () {
    // Function to update price
    function update_price() {
      var row = $(this).closest('.item-row');
      var prisEx = parseFloat(row.find('.PRIS_EX input').val()); // Corrected selector
      var qty = parseFloat(row.find('.QTY input').val()); // Corrected selector
  
      // Calculate MOMS, PRIS INK., and TOTALT
      var moms = calculateMoms(prisEx);
      var prisInk = prisEx + moms;
      var totalt = prisInk * qty;
  
      // Update MOMS with two decimals
      row.find('.MOMS').text(moms.toFixed(2));
  
      // Update PRIS INK. and TOTALT with formatting
      row.find('.PRIS_INK').text(prisInk.toFixed(2));
      row.find('.TOTALT').text(totalt.toFixed(2));
  
      update_total();
    }
  
    // Calculate MOMS
    function calculateMoms(prisEx) {
      return prisEx * 0.25; // Calculate MOMS as 25% of PRIS EX.
    }
  
    // Function to update total
    function update_total() {
      var total = 0;
      $('.PRIS_INK').each(function (i) {
        var price = $(this).text(); // Corrected variable declaration
        if (!isNaN(price)) total += Number(price);
      });
  
      total = roundNumber(total, 2);
  
      $('#subtotal').text("$" + total);
      $('#total').text("$" + total);
  
      update_balance();
    }
  
    // Function to round number
    function roundNumber(number, decimals) {
      // Your existing roundNumber function remains unchanged
      // Keep it as it is
    }
  
    // Event handler for input changes
    $('.QTY input, .PRIS_EX input').on('input', update_price);
  
    // Other code remains unchanged
  });
  