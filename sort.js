<button id="counterBtn">Click me</button>
<p id="count">0</p>

<script>
  const btn = document.getElementById("counterBtn");
  const countDisplay = document.getElementById("count");
  let count = 0;

  btn.onclick = function() {
    count += 1;
    countDisplay.innerHTML = count;
  };
</script>
