<div>
	<div class="min-h-screen flex items-center justify-center">
		<div class="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
			<h1 class="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">회원가입</h1>
			<form action="?/signup" method="POST">
				<div class="mb-4">
					<label for="username" class="block mb-2 text-sm text-gray-600">이름</label>
					<input
						type="text"
						id="username"
						name="username"
						class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
						required
					/>
				</div>
				<div class="mb-4">
					<label for="email" class="block mb-2 text-sm text-gray-600">이메일</label>
					<input
						type="email"
						id="email"
						name="email"
						class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
						required
					/>
				</div>
				<div class="mb-4">
					<label for="password" class="block mb-2 text-sm text-gray-600">비밀번호</label>
					<input
						type="password"
						id="password"
						name="password"
						class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
						required
					/>
				</div>
				<div class="mb-6">
					<label for="confirmPassword" class="block mb-2 text-sm text-gray-600"
						>비밀번호 재입력</label
					>
					<input
						type="password"
						id="confirmPassword"
						name="confirmPassword"
						class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
						required
					/>
				</div>
				<button
					type="submit"
					class="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2"
					>회원가입</button
				>
			</form>
			<div class="text-center">
				<p class="text-sm">
					이미 계정이 있나요? <a href="/login" class="text-cyan-600">로그인</a>
				</p>
			</div>
		</div>
	</div>
</div>
