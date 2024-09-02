<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

//變數區域
const router = useRouter()
const token = ref('')
const root = ref('https://todolist-api.hexschool.io')
const currentUser = ref('')
const filterStatus = ref()
const todoLists = ref([])
const addContent = ref('')
const isLogin = ref(false)
const temp = ref({
  id: '',
  createTime: 0,
  content: '',
  status: false
})

//方法區域
//檢查Token
async function checkToken() {
  try {
    //取得token
    token.value = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, '$1')
    //進行token的驗證
    const url = `${root.value}/users/checkout`
    const response = await axios.get(url, {
      headers: {
        Authorization: token.value
      }
    })
    console.log('檢查Token結果', response)

    if (response.status == 200) {
      currentUser.value = response.data
      isLogin.value = true
      status.value = 'signIn'
    }
  } catch (error) {
    console.log('Token檢查失敗', error)
  }
}

//取得TodoList
async function getTodoList() {
  const url = `${root.value}/todos/`
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: token.value
      }
    })

    if (response.status == 200) {
      todoLists.value = response.data.data
    }
  } catch (error) {
    console.log('取得TodoList失敗', error)
  }
}

//篩選TodoList
function filterTodoList(status) {
  if ((status = '')) {
    showTodoLists.value = [...todoLists.value]
  } else {
    showTodoLists.value = ''
    todoLists.value.forEach((todo) => {
      if (todo.status == status) {
        showTodoLists.value.push(todo)
      }
    })
  }
}

//新增TODO
async function addTodo() {
  //檢查內容
  if (addContent.value == '') {
    alert('代辦事項不得空白')
    return
  }

  const url = `${root.value}/todos/`
  try {
    const response = await axios.post(
      url,
      {
        content: addContent.value
      },
      {
        headers: {
          Authorization: token.value
        }
      }
    )

    addContent.value = ''
  } catch (error) {
    alert('新增代辦事項失敗', error)
    console.log('新增失敗', error)
  }
  await getTodoList()
}

//刪除TODO
async function deleteTodo(id) {
  const url = `${root.value}/todos/${id}`
  try {
    const response = await axios.delete(url, {
      headers: {
        Authorization: token.value
      }
    })
  } catch (error) {
    console.log('刪除失敗', error)
  }
  temp.value = {}
  await getTodoList()
}

//更新Toggle
async function updateToggle(id) {
  const url = `${root.value}/todos/${id}/toggle`
  try {
    const response = await axios.patch(
      url,
      {},
      {
        headers: {
          Authorization: token.value
        }
      }
    )
  } catch (error) {
    console.log('更新toggle失敗', error)
  }
  await getTodoList()
}

//篩選
function swtichFilter(mode) {
  filterStatus.value = mode
}

//登出
async function signOut() {
  const url = `${root.value}/users/sign_out`
  try {
    const response = await axios.post(
      url,
      {},
      {
        headers: {
          Authorization: token.value
        }
      }
    )
    router.push('/')
  } catch (error) {
    alert(error)
  }
}

onMounted(async () => {
  await checkToken()
  if (isLogin.value) {
    await getTodoList()
  } else {
    router.push('/')
  }
})
</script>

<template>
  <!-- ToDo List -->
  <div id="todoListPage" class="bg-half">
    <nav>
      <h1><a href="#">ONLINE TODO LIST</a></h1>
      <ul>
        <li class="todo_sm">
          <a href="javascript:;"
            ><span>{{ currentUser ? `${currentUser.nickname}的代辦` : '尚未登入' }}</span></a
          >
        </li>
        <li><a href="#loginPage" @click="signOut()">登出</a></li>
      </ul>
    </nav>
    <div class="conatiner todoListPage vhContainer">
      <div class="todoList_Content">
        <div class="inputBox">
          <input type="text" placeholder="請輸入待辦事項" v-model="addContent" />
          <a href="#" @click.prevent="addTodo()">
            <i class="fa fa-plus"></i>
          </a>
        </div>
        <div class="todoList_list" v-if="todoLists.length > 0">
          <ul class="todoList_tab">
            <li>
              <a
                href="#"
                @click.prevent="swtichFilter()"
                :class="{ active: filterStatus == null ? true : false }"
                >全部</a
              >
            </li>
            <li>
              <a
                href="#"
                @click.prevent="swtichFilter(false)"
                :class="{ active: filterStatus == false ? true : false }"
                >待完成</a
              >
            </li>
            <li>
              <a
                href="#"
                @click.prevent="swtichFilter(true)"
                :class="{ active: filterStatus == true ? true : false }"
                >已完成</a
              >
            </li>
          </ul>
          <div class="todoList_items">
            <ul class="todoList_item">
              <li
                v-for="(item, index) in todoLists"
                key="{{item.id}}"
                v-show="filterStatus == null ? true : filterStatus == item.status"
              >
                <label class="todoList_label">
                  <input
                    class="todoList_input"
                    type="checkbox"
                    value="true"
                    :checked="item.status"
                    @click.prevent="updateToggle(item.id)"
                  />
                  <span>{{ item.content }}</span>
                </label>
                <a href="#" @click.prevent="deleteTodo(item.id)">
                  <i class="fa fa-times"></i>
                </a>
              </li>
            </ul>
            <div class="todoList_statistics">
              <p v-if="filterStatus == null || filterStatus == true ? true : false">
                {{ todoLists.filter((item) => item.status == true).length }} 個完成項目
              </p>
              <p v-if="filterStatus == null || filterStatus == false ? true : false">
                {{ todoLists.filter((item) => item.status == false).length }} 個未完成項目
              </p>
            </div>
          </div>
        </div>
        <div class="text-align-center" v-if="todoLists.length == 0">
          <p>目前尚無代辦事項</p>
        </div>
      </div>
    </div>
  </div>
  <!-- partial -->
</template>
