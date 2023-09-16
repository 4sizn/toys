<script type="ts">
	export let data;
	let reels = data?.reels || {};
	const { thumbnail_resources = [] } = reels;
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
			href="/?active">Active</a
		>
	</li>
	<li class="mr-1">
		<a
			class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
			href="/?tab">Tab</a
		>
	</li>
	<li class="mr-1">
		<a
			class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
			href="/?tab">Tab</a
		>
	</li>
	<li class="mr-1">
		<a class="bg-white inline-block py-2 px-4 text-gray-400 font-semibold" href="/?tab">Tab</a>
	</li>
</ul>

<div class="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
	<!-- Columns -->
	{#each thumbnail_resources as { display_url, display_resource }}
		<div class="bg-gray-300">
			<img
				src={display_resource[0].src}
				alt={display_url}
				width={display_resource[0].config_width}
				height={display_resource[0].config_height}
			/>
		</div>
	{/each}

	<!-- Columns -->
</div>
