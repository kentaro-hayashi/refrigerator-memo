<script>
export default {
  name: 'Logout',
  fetch() {
    this.$store.dispatch('auth/logout')
  }
}
</script>
