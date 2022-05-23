<script>
  export let result;
</script>

<div class="card">
  <div class="container">
    <table>
      <tr>
        <th>No</th>
        <th>Keyword</th>
        <th>Index Location</th>
      </tr>
      {#each result as res, i}
      <tr>
        <td>{i+1}</td>
        <td>{res.key}</td>
        <td>{res.loc}</td>
      </tr>
      {/each}
    </table>
  </div>
</div>

<style>
	.card {
		width: 50%;
		background: #ffffff;
		border-radius: 10px;
		padding: 20px;
	}

  .container {
    display: flex;
    justify-content: center;
  }

  table {
    width: 100%;
  }

  th {
    background: #cccccc;
    padding: 10px;
    text-align: left;
  }

  td {
    padding: 10px;
  }
</style>