<div class="h-screen bg-gray-50 flex flex-col justify-center items-center">
	<div class="bg-white border border-gray-300 w-80 py-8 flex items-center flex-col mb-3">
		<h1 class="bg-no-repeat instagram-logo">toys</h1>
		<form action="?/login" method="POST" class="mt-8 w-64 flex flex-col">
			<input
				class="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
				id="email"
				name="email"
				placeholder="Phone number, username, or email"
				type="text"
			/>
			<input
				class="text-xs w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
				id="password"
				name="password"
				placeholder="Password"
				type="password"
			/>
			<button class="text-sm text-center bg-blue-300 text-white py-1 rounded font-medium">
				Log In
			</button>
		</form>
		<div class="flex justify-evenly space-x-2 w-64 mt-4">
			<span class="bg-gray-300 h-px flex-grow t-2 relative top-2" />
			<span class="flex-none uppercase text-xs text-gray-400 font-semibold">or</span>
			<span class="bg-gray-300 h-px flex-grow t-2 relative top-2" />
		</div>

		<a class="text-xs text-blue-900 mt-4 cursor-pointer -mb-4" href="/forgot-password"
			>Forgot password?</a
		>
	</div>
	<div class="bg-white border border-gray-300 text-center w-80 py-4">
		<span class="text-sm">Don't have an account?</span>
		<a class="text-blue-500 text-sm font-semibold" href="/signup">Sign up</a>
	</div>
	<div class="mt-3 text-center">
		<span class="text-xs">Get the app</span>
		<div class="flex mt-3 space-x-2">
			<div class="bg-no-repeat apple-store-logo" />
			<div class="bg-no-repeat google-store-logo" />
		</div>
	</div>
</div>

<style>
	.apple-store-logo {
		background-position: -132px -182px;
		height: 42px;
		width: 128px;
		background-image: url(https://bit.ly/3v2LT17);
	}
	.google-store-logo {
		background-position: 0 -182px;
		height: 42px;
		width: 130px;
		background-image: url(https://bit.ly/3v2LT17);
	}
</style>
