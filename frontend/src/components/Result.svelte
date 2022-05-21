<script>
  export let algo, time, result;
</script>

<div class="container">
  <p class="result">{result}%</p>
  <div class="info">
    <p class="algo">{algo}</p>
    <p class="time">{time}ms</p>
  </div>
</div>

<style>
  .algo {
    font-weight: bold;
  }
  .container {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .result {
    font-weight: bold;
    font-size: 1.8em;
  }
</style>