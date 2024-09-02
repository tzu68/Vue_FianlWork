<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const status = ref('login')
const root = ref('https://todolist-api.hexschool.io')
const signUpInfomation = ref({
  email: '',
  password: '',
  passwordCheck: '',
  nickname: ''
})
const userInfomation = ref({
  email: '',
  password: ''
})

//登入
async function login() {
  const url = `${root.value}/users/sign_in`
  try {
    const response = await axios.post(url, userInfomation.value)
    document.cookie = `hexToken=${response.data.token}`
    router.push('/todolist')
  } catch (error) {
    alert(error)
  }
}

//註冊
async function signUp() {
  //檢查密碼
  if (signUpInfomation.value.passwordCheck != signUpInfomation.value.password) {
    alert('[密碼]與[再次輸入密碼]不相符，請確認兩者相同。')
    return
  }

  const url = `${root.value}/users/sign_up`
  try {
    const response = await axios.post(url, signUpInfomation.value)
    alert('註冊成功!')
    status.value = 'login'
  } catch (error) {
    alert(error.response.data.message)
  }
}
</script>

<template>
  <div id="loginPage" class="bg-yellow">
    <div class="conatiner loginPage vhContainer">
      <div class="side">
        <a href="#"
          ><img
            class="logoImg"
            src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/logo.png"
            alt=""
        /></a>
        <img
          class="d-m-n"
          src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/img.png"
          alt="workImg"
        />
      </div>
      <!-- login_page -->
      <div v-if="status != 'signUp'">
        <form class="formControls" action="index.html">
          <h2 class="formControls_txt">最實用的線上代辦事項服務</h2>
          <label class="formControls_label" for="email">Email</label>
          <input
            class="formControls_input"
            type="text"
            id="email"
            name="email"
            placeholder="請輸入 email"
            required
            v-model="userInfomation.email"
          />
          <span>此欄位不可留空</span>
          <label class="formControls_label" for="pwd">密碼</label>
          <input
            class="formControls_input"
            type="password"
            name="pwd"
            id="pwd"
            placeholder="請輸入密碼"
            required
            v-model="userInfomation.password"
          />
          <input
            class="formControls_btnSubmit"
            type="button"
            value="登入"
            @click.prevent="login()"
          />
          <a class="formControls_btnLink" @click.prevent="() => (status = 'signUp')">註冊帳號</a>
        </form>
      </div>
      <!-- sign up -->
      <div v-if="status == 'signUp'">
        <form class="formControls" action="index.html">
          <h2 class="formControls_txt">註冊帳號</h2>
          <label class="formControls_label" for="email">Email</label>
          <input
            class="formControls_input"
            type="text"
            id="email"
            name="email"
            placeholder="請輸入 email"
            required
            v-model="signUpInfomation.email"
          />
          <label class="formControls_label" for="name">您的暱稱</label>
          <input
            class="formControls_input"
            type="text"
            name="name"
            id="name"
            placeholder="請輸入您的暱稱"
            v-model="signUpInfomation.nickname"
          />
          <label class="formControls_label" for="pwd">密碼</label>
          <input
            class="formControls_input"
            type="password"
            name="pwd"
            id="pwd"
            placeholder="請輸入密碼"
            required
            v-model="signUpInfomation.password"
          />
          <label class="formControls_label" for="pwd">再次輸入密碼</label>
          <input
            class="formControls_input"
            type="password"
            name="pwd"
            id="pwd"
            placeholder="請再次輸入密碼"
            required
            v-model="signUpInfomation.passwordCheck"
          />
          <input class="formControls_btnSubmit" type="button" value="註冊帳號" @click="signUp()" />
          <a class="formControls_btnLink" @click.prevent="() => (status = 'login')">登入</a>
        </form>
      </div>
    </div>
  </div>

  <div id="signUpPage" class="bg-yellow">
    <div>
      {{ signUpInfomation }}
    </div>
    <div class="conatiner signUpPage vhContainer">
      <div class="side">
        <a href="#"
          ><img
            class="logoImg"
            src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/logo.png"
            alt=""
        /></a>
        <img
          class="d-m-n"
          src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/img.png"
          alt="workImg"
        />
      </div>
    </div>
  </div>
</template>

<style>
.todoList_statistics {
  display: flex;
  flex-direction: column;
  gap: 2vh;
}

.text-align-center {
  text-align: center;
}
</style>
