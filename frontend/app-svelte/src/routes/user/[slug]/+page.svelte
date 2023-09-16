<script type="ts">
	export let data;

	console.log('hsshin', data);
</script>

<div class="md:flex bg-white rounded-lg p-6">
	<svg
		class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
		fill="currentColor"
		viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg"
		><path
			fill-rule="evenodd"
			d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
			clip-rule="evenodd"
		/></svg
	>

	<div class="text-center md:text-left">
		<h2 class="text-lg">Erin Lindford</h2>
		<div class="text-purple-500">Product Engineer</div>
		<div class="text-gray-600">erinlindford@example.com</div>
		<div class="text-gray-600">(555) 765-4321</div>
	</div>
</div>

<ul class="flex border-b">
	<li class="-mb-px mr-1">
		<a
			class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
			href="#">Active</a
		>
	</li>
	<li class="mr-1">
		<a
			class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
			href="#">Tab</a
		>
	</li>
	<li class="mr-1">
		<a
			class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
			href="#">Tab</a
		>
	</li>
	<li class="mr-1">
		<a class="bg-white inline-block py-2 px-4 text-gray-400 font-semibold" href="#">Tab</a>
	</li>
</ul>

<div class="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
	<!-- Columns -->
	<div class="bg-red-300">
		<h5>1</h5>
	</div>

	<div class="bg-blue-300">
		<h5>2</h5>
	</div>

	<div class="bg-green-300">
		<h5>3</h5>
	</div>

	<div class="bg-orange-300">
		<h5>4</h5>
	</div>

	<div class="bg-teal-300">
		<h5>5</h5>
	</div>

	<div class="bg-yellow-300">
		<h5>6</h5>
	</div>

	<div class="bg-slate-300">
		<h5>7</h5>
	</div>

	<div class="bg-pink-300">
		<h5>8</h5>
	</div>

	<div class="bg-violet-300">
		<h5>9</h5>
	</div>

	<div class="bg-amber-300">
		<h5>10</h5>
	</div>

	<div class="bg-cyan-300">
		<h5>11</h5>
	</div>

	<div class="bg-fuchsia-300">
		<h5>12</h5>
	</div>
	<!-- Columns -->
</div>
