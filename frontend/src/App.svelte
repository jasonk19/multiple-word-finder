<script>
	import BruteForce from "./lib/bruteforce";
	import KMP from "./lib/kmp";
	import BM from "./lib/bm";

	import Result from "./components/Result.svelte";

	let firstText = '',
		secondText = '';

	let bftime = '',
		kmptime = '',
		bmtime = '';

	let bfres = '',
		kmpres = '',
		bmres = '';
	
	$: resultExist = bftime !== '' && kmptime !== '' && bmtime !== '';

	const roundToTwo = (num) => {
    return +(Math.round(num + "e+2")  + "e-2");
	}

	const submit = () => {
		const bruteforce = new BruteForce(firstText, secondText)
		const kmp = new KMP(firstText, secondText)
		const bm = new BM(firstText, secondText)
		let start, end;

		start = performance.now()
		bfres = bruteforce.solve()
		end = performance.now()
		bftime = roundToTwo(end - start)

		start = performance.now()
		kmpres = kmp.solve()
		end = performance.now()
		kmptime = roundToTwo(end - start)

		start = performance.now()
		bmres = bm.solve()
		end = performance.now()
		bmtime = roundToTwo(end - start)

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
				<Result algo="Brute Force" time={bftime} result={bfres} />
				<Result algo="KMP" time={kmptime} result={kmpres} />
				<Result algo="BM" time={bmtime} result={bmres} />
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
		padding: 20px;
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