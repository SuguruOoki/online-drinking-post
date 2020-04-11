
  <template>
  <div class="signup">
    <table>
      <tr>
        <th>メールアドレス：</th>
      </tr>
      <tr>
        <td>
          <input type="email" v-model="mailaddress" />
        </td>
      </tr>
      <tr>
        <th>パスワード：</th>
      </tr>
      <tr>
        <td>
          <input type="password" v-model="password" />
        </td>
      </tr>
    </table>
    <button @click="signUp">登録</button>
  </div>
</template>

<script>
export default {
  name: "SingUp",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
