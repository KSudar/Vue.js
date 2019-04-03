<template>
   <div>
      <div class="form-group">
         <label for="firstName">First Name</label>
         <input
            type="text"
            id="firstName"
            class="form-control"
            :value="firstName"
            @input="nameChanged(true, $event)"
         >
      </div>
      <div class="form-group">
         <label for="lastName">Last Name</label>
         <input
            type="text"
            id="lastName"
            class="form-control"
            :value="lastName"
            @input="nameChanged(false, $event)"
         >
      </div>
   </div>
</template>
<script>
   export default {
      props: ['value'],
      methods: {
         nameChanged(isFirst, event) {
            let name = ''
            if (isFirst) {
               name = event.target.value + ' ' + this.lastName;
            } else {
               name = this.firstName + ' ' + event.target.value;
            }
            this.$emit('input', name)
         }
      },
      computed: {
         firstName() {
            return this.value.split(' ')[0]
         },
         lastName() {
            return this.value.split(' ')[1]
         }
      }
   }
</script>
<style>
</style>
