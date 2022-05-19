<script>
	import Result from "./components/Result.svelte";

	let firstText = '',
		secondText = '';

	let bftime = '',
		kmptime = '',
		bmtime = '';
	
	$: resultExist = bftime !== '' && kmptime !== '' && bmtime !== '';

	const submit = () => {
		console.log(firstText)
		console.log(secondText)
	};

</script>

<div class="container">
	<div class="card">
		<h1>Plagiarisme Checker</h1>
		<form class="input">
			<textarea bind:value={firstText} placeholder="Text to check"></textarea>
			<textarea bind:value={secondText} placeholder="Referenced Text"></textarea>
		</form>
		<div class="result">
			<button on:click={submit}>Submit</button>
			{#if resultExist}
				<Result algo="Brute Force" time={bftime} />
				<Result algo="KMP" time={kmptime} />
				<Result algo="BM" time={bmtime} />
			{/if}
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100vw;
		background: #14173b;
	}

	.card {
		width: 50%;
		background: #ffffff;
		border-radius: 10px;
		padding: 13px;
	}

	h1 {
		position: relative;
	}

	h1::after {
		content: '';
		position: absolute;
		width: 10em;
		height: 2px;
		background-color: black;
		bottom: -5px;
		left: 0;
		right: 0;
	}

	.input {
		margin-top: 1em;
		display: flex;
		width: 100%;
		justify-content: center;
		gap: 17px;
	}

	textarea {
		resize: none;
		padding: 5px;
		height: 13em;
		width: 100%;
		font-size: 16px;
	}

	.result {
		margin-top: 1em;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	button {
		outline: none;
		border: none;
		background-color: #14173b;
		color: #ffffff;
		padding: .5em 1.3em;
		border-radius: 3px;
		cursor: pointer;
		font-size: 1em;
	}
</style>