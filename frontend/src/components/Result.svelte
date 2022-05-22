<script>
  export let algo, time;
</script>

<div class="container">
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
</style>