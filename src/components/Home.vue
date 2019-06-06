	<template>

		<div class="container-login100" style="background-image: url('images/bg-01.jpg');">
			<div  class="wrap-login100">
			<form>
					<span class="login100-form-logo">
						<i class="zmdi zmdi-landscape"></i>
					</span>

					<span class="login100-form-title p-b-34 p-t-27">
				<!--	{{ login }} -->
					</span>

					<div class="wrap-input100 validate-input" data-validate="Email">
						<input class="input100" type="text" v-model="email" placeholder="Email">
						<span class="focus-input100" data-placeholder="&#xf207;"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Enter password">
						<input class="input100" type="password" v-model="pass" placeholder="Password">
						<span class="focus-input100" data-placeholder="&#xf191;"></span>
                    </div>
                    
					<div class="container-login100-form-btn">
					<!--	<button @click="botaologin" class="login100-form-btn">
							Login
						</button> -->
					</div>
				</form>
					
			</div>
		</div>
	</template>

<script>
export default {
    
}
</script>

<style>

</style>
