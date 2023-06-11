<script>
    document.addEventListener('DOMContentLoaded', function() {
      const form = document.getElementById('testForm');
      const resetButton = document.getElementById('reset');
  
      resetButton.addEventListener('click', function(event) {
        event.preventDefault();
        form.reset();
      });
  
      const submitButton = document.getElementById('submit');
  
      submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        // Perform any necessary form submission logic here
        form.submit();
      });
    });
  </script>