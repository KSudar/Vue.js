export const computedLength = {
   data() {
      return {
         secondTextMixin: 'Krešimir'
      }
   },
   computed: {
      appendLengthMixin() {
         return this.secondText + " (" + this.secondText.length + ")";
      }
   }
}