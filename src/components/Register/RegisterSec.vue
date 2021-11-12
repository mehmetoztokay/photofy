<template>
  <div class="register-area">
    <div class="logo">
      <img src="~@/assets/logo-photofy-dark.svg" alt="photofy" />
    </div>
    <p class="slogan">sen de serüvene katıl!</p>
    <div class="form-area">
      <label for="">
        E Posta Adresiniz
        <input type="email" />
      </label>
      <label for="">
        Şifreniz
        <input type="email" />
      </label>
      <p class="form-link">photofy hesabın zaten var mı, hemen <router-link :to="{ name: 'HomePage' }">giris yap!</router-link></p>
      <a class="form-button transition" href="/">giris</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.register-area {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 45px 30px 45px 55px;
  margin-left: 7%;
  height: auto;
  border-radius: 10px;
}

.register-area .slogan {
  color: #000;
  font-size: 1.5rem;
  font-weight: 300;
  margin-top: 1rem;
}

.register-area .form-area {
  margin-top: 1.2rem;
  width: 400px;
  display: flex;
  flex-direction: column;
}

.register-area .form-area label {
  display: block;
  color: #000;
  font-weight: 100;
  font-size: 1.1rem;
  margin-top: 15px;
}

.register-area .form-area input {
  display: block;
  box-shadow: none;
  border: none;
  padding: 10px 5px;
  border-radius: 4px;
  margin-top: 3px;
  width: 100%;
  font-size: 1.1rem;
  font-weight: 100;
  border: 1px solid #dedede;
}

.register-area .form-area input:focus {
  outline: none;
}

.register-area .form-area .form-link {
  color: #000;
  font-weight: 100;
  margin-top: 1.5rem;
  font-size: 1rem;
}

.register-area .form-area .form-link a {
  font-weight: 500;
  color: #2e8fa4;
}

.register-area .form-area .form-link a:hover {
  color: #135f70;
}

.register-area .form-area .form-button {
  background-color: #2e8fa4;
  color: #fff;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 8px 15px;
  align-self: flex-end;
  margin-top: 2rem;
  border-radius: 5px;
}

.register-area .form-area .form-button:hover {
  background-color: #135f70;
  justify-self: end;
}

@media screen and (max-width: 640px) {
  .register-area {
    margin-left: 0;
    width: 90%;
    padding: 30px 25px 25px 25px;
  }

  .register-area .form-area {
    width: 100%;
  }
}
</style>