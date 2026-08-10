<script setup lang="ts">
import { ref } from 'vue'

const email = ref('sonnenlicht@foxmail.com')
</script>
<template>
  <h1>使用邮箱联系我</h1>
  <p>请填写以下信息，我会尽快回复您。</p>
  

  <form action="https://api.web3forms.com/submit" method="POST">
    <input
      type="hidden"
      name="access_key"
      value="c3073983-bd6a-4e2c-9343-84782536f0a7"
    />
    <label for="name">
        昵称：
        <input type="text" name="name" required placeholder="请输入您的昵称" />
    </label>
    <label for="email">
        您的联系邮箱：
        <input type="email" name="email" required placeholder="请输入您的联系邮箱" />
    </label>
    <label for="message">
        您的问题描述：
        <textarea name="message" required placeholder="请输入您的问题描述" rows="4"></textarea>
    </label>
    <button type="submit">发送邮件</button>
  </form>
  <p>(也可以直接发送邮件到：{{ email }})</p>
</template>
<style module>
h1 {
  text-align: center;
  margin: 25px auto;
  font-size: 18px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}
p {
  margin: 12px 0;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: var(--vp-c-text-2);
}
form {
  margin: 0 auto;
  max-width: 400px;
  padding: 20px;
  border-radius: 8px;

  label {
    display: block;
    margin-bottom: 12px;
    font-size: 16px;
    font-weight: 500;
    color: var(--vp-c-text-3);
  }

  input,
  textarea {
    margin-bottom: 12px;
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: var(--vp-c-text-3);
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: var(--vp-c-brand-1);
  }


  button {
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    width: 100%;
  }
  button:hover {
    background-color: #0056b3;
  }
}

</style>
