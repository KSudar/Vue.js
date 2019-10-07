<template>
   <div class="container">
      <div class="row">
         <div
            class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
         >
            <h1>Filters & Mixins</h1>
            <!-- Exercise 1) -->
            <!-- Build a local Filter which reverses the Text it is applied on -->
            <p>{{ firstText | reverseString }}</p>

            <!-- Exercise 2 -->
            <!-- Build a global Filter which counts the length of a word and it appends it -->
            <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
            <p>{{ secondText | appendLength }}</p>

            <!-- Exercise 3 -->
            <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
            <p>{{ reverseStringComputed }}</p>
            <p>{{ appendLengthComputed }}</p>
            <!-- Exercise 4 -->
            <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            <p>{{ appendLengthMixin }}</p>
         </div>
      </div>
   </div>
</template>

<script>
   import { computedLength } from "./computedLengthMixin.js";
   export default {
       mixins: [computedLength],
      data() {
         return {
            firstText: "Some Text!",
            secondText: "Krešimir"
         };
      },
      filters: {
         reverseString(value) {
            return value
               .split("")
               .reverse()
               .join("");
         }
      },
      computed: {
         reverseStringComputed() {
            return this.firstText
               .split("")
               .reverse()
               .join("");
         },
         appendLengthComputed() {
            return this.secondText + " (" + this.secondText.length + ")";
         }
      }
   };
</script>

<style>
</style>
