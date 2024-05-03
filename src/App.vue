<!-- <template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style> -->
<!-- <script setup>
import { ref } from 'vue';

// 定义一个 count 计数变量，同时通过 ref 声明其是一个响应式数据，实现数据的双向绑定
const count = ref(0)
</script>

<template>
  <h1>Hello, Vue 3 !</h1>
  <button @click="count++">Count: {{ count }}</button>
</template>

<style scoped>
</style> -->
<template>
<p>城迹探旅</p>
    <div style="position:relative;">
        <button onclick="window.location.href='../气候纵览.html'" >气候<br/>纵览</button>
        <button onclick="window.location.href='../可视化.html'">美食<br/>风景</button>
        <button onclick="window.location.href='../人流出行.html'">人流<br/>出行</button>
    </div>
</template>
<style>
 @font-face {
         font-family: "MyFont";
         src: url("@/assets/ChillLongCangKaiShu_Regular.otf");
}
 p{
                position:absolute;
                top:0px;
                left:350px;
                font-size: 140px;
                color:black;   
                font-family:MyFont;
            }
          
body {
      background-image: url('@/assets/pp3.jpg');
      background-size: cover; 
      background-repeat: no-repeat;
    }
button{
            padding:10px 20px;
            background-image:url('@/assets/pp3.jpg');
            background-size:cover;
            font-size:37px;
            color:black;
            border:none;
            cursor:pointer;
            margin:50px;
            font-family:MyFont;
            transform: skewX(-20deg);
            margin-left:200px;
            margin-right:60px;
            margin-top:300px;
            border-radius:5px;
            width:95px;
            height:170px;
            box-shadow:
			2px 4px 2px 5px rgba(0,0,0,0.2),
			
			2px 4px 1px 1px hsl(208, 50%, 55%),
              
			0 -15px 2px 2px rgba(0,0,0,0.10) inset;

            }
</style>
