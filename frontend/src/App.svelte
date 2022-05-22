<script>
	import BruteForce from "./lib/bruteforce";
	import KMP from "./lib/kmp";
	import BM from "./lib/bm";

	import Result from "./components/Result.svelte";

	let inputText = '';

	let bftime = '',
		kmptime = '',
		bmtime = '';

	let bfres, kmpres, bmres;

	let result = {};
	
	$: resultExist = bftime !== '' && kmptime !== '' && bmtime !== '';

	const roundToTwo = (num) => {
    return +(Math.round(num + "e+2")  + "e-2");
	}

	const submit = () => {
		let text = inputText;
		let referenceText = document.querySelector(".referenceText");
		let innerHTML = referenceText.innerHTML.replace( /(<([^>]+)>)/ig, '');
		const bruteforce = new BruteForce(text, innerHTML)
		const kmp = new KMP(text, innerHTML)
		const bm = new BM(text, innerHTML)
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
			result[key] = value.join(', ')
		}

	};

</script>

<div class="container">
	<div class="card">
		<h1>Multiple Word Finder</h1>
		<form class="input">
			<textarea bind:value={inputText} placeholder="Text to check"></textarea>
			<div class="referenceText">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium soluta, odio voluptatem dolorum ullam, eum rem aperiam reiciendis neque labore consequatur a quas atque officiis vero sit iure modi quia. Iusto aliquam hic, quia expedita amet rerum reiciendis vitae modi ipsum tenetur voluptas incidunt possimus recusandae nemo ad aut eum. Quasi corporis voluptatibus fuga debitis?
			</div>
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
		margin-top: 1em;
		display: flex;
		width: 100%;
		justify-content: center;
		gap: 17px;
	}

	textarea, .referenceText {
		resize: none;
		padding: 5px;
		height: 13em;
		width: 100%;
		font-size: 16px;
	}

	.referenceText {
		text-align: justify;
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