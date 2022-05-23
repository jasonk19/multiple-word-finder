<script>
	import BruteForce from "./lib/bruteforce";
	import KMP from "./lib/kmp";
	import BM from "./lib/bm";

	import Result from "./components/Result.svelte";
	import SearchResult from "./components/SearchResult.svelte";

	let inputText = '',
		referenceText = '';

	let bftime = '',
		kmptime = '',
		bmtime = '';

	let bfres, kmpres, bmres;

	let result = [];
	
	$: resultExist = bftime !== '' && kmptime !== '' && bmtime !== '';

	const roundToTwo = (num) => {
    return +(Math.round(num + "e+2")  + "e-2");
	}

	const submit = () => {
		const bruteforce = new BruteForce(inputText, referenceText)
		const kmp = new KMP(inputText, referenceText)
		const bm = new BM(inputText, referenceText)
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

		for (const [key, value] of kmpres.entries()) {
			result.push({
				key: key,
				loc: value.join(', ')
			})
		}

		console.log(result)
	};

</script>

<div class="container">
	<div class="card">
		<h1>Multiple Word Finder</h1>
		<form class="input">
			<textarea bind:value={inputText} placeholder="Word to search"></textarea>
			<textarea class="referenceText" bind:value={referenceText} placeholder="Reference Text"></textarea>
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
	{#if result.length > 0}
		<SearchResult bind:result />
	{/if}
</div>


<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 15px;
		align-items: center;
		padding: 2em 0;
		width: 100vw;
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
		width: 11em;
		height: 2px;
		background-color: black;
		bottom: -5px;
		left: 0;
		right: 0;
	}

	.input {
		margin-top: 1.5em;
		display: flex;
		flex-direction: column;
		width: 100%;
		justify-content: center;
		gap: 10px;
	}

	textarea {
		resize: none;
		padding: 5px;
		font-size: 16px;
	}

	.referenceText {
		height: 20em;
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