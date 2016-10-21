<style lang="sass">
</style>

<template>
  <div class="modal" :class="{ 'is-active': visible }">
    <div class="modal-background"></div>
    <form @submit.prevent="submit" class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ title }}</p>
        <button @click.prevent="close" class="delete"></button>
      </header>
      <section class="modal-card-body">
        <slot />
      </section>
      <footer class="modal-card-foot">
        <button
          class="button is-primary"
          :class="{ 'is-loading': loading }"
          type="submit"
        >Save changes</button>
      </footer>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormPopup',
  props: {
    submit: Function,
    close: Function,
    loading: Boolean,
    title: String,
    visible: Boolean
  }
}
</script>
